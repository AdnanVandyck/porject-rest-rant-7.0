const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  pic: String,
  cuisines: { type: String, required: true},
  city: { type: String, default: 'Anytown'},
  state: { type: String, default: 'USA'},
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)










// module.exports = [{
//     name: 'PANDA',
//     city: 'Harlem',
//     state: 'NY',
//     cuisines: 'Asian Fusion',
//     pic: 'images/panda-logo.jpeg'
//   }, {
//     name: 'Blu On The Hudson',
//     city: 'Weehawken',
//     state: 'NJ',
//     cuisines: 'Steakhouse, Suishi',
//     pic: 'images/tomahawk-steak.jpg'
//   }]