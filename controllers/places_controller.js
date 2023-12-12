const router = require('express').Router()


// CREATE
router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })


//INDEX
router.get('/', (req, res) => {
    let places = [{
        name: 'PANDA',
        city: 'Harlem',
        state: 'NY',
        cuisines: 'Asian Fusion',
        pic: 'images/panda-logo.jpeg'
      }, {
        name: 'Blu On The Hudson',
        city: 'Weehawken',
        state: 'NJ',
        cuisines: 'Steakhouse, Suishi',
        pic: 'images/tomahawk-steak.jpg'
      }]
      
    res.render('places/index', {places})
})

// NEW
router.get('/new', (req, res) => {
    res.render('places/new')
  })
  



module.exports = router
