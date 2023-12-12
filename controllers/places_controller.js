const router = require('express').Router()

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

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

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  



module.exports = router
