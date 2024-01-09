const router = require('express').Router()
const db = require('../models/place')

// GET /places
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
  // res.send('GET /places stub')
})

// EDIT PLACES
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/edit', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// POST
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    if (err && err.name == 'ValidationError') {
      let message = 'Validation Error: '
      for (var field in err.errors) {
        message += `${field} was ${err.errors[field].value}. `
        message += `${err.errors[field].message}`
    }
    console.log('Validation error message', message)

      //  TO DO: Generate error message(s)
      res.render('places/new', { message })
    }
    else {
      res.render('error404')
    }
  })
  // res.send('POST /places stub')
})

// NEW PLACE
router.get('/new', (req, res) => {
  res.render('places/new')
})

// SHOW /places
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place => {
    console.log(place.comments)
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
  // res.send('GET /places/:id stub')
})







// CREATE Comments
router.post('/:id/comment', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment => {
      place.comments.push(comment.id)
      place.save()
      .then(() => {
        res.redirect(`/places/${req.params.id}`)
      })
    })
    .catch(err => {
      res.render('error404')
    })
  })
  .catch(err => {
    res.render('error404')
  })
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

// EDIT ROUTE
router.put('/:id', (req, res) => {
db.Place.findByIdAndUpdate(req.params.id, req.body)
.then(() => {
  res.redirect(`/places/${req.params.id}`)
})
.catch(err => {
  console.log('err', err)
  res.render('error404')
})
})


// DELETE - delete a place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})
module.exports = router
