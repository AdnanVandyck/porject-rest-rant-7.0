const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true},
  pic: {
    type: String,
  default: 'https://unsplash.com/photos/a-table-topped-with-lots-of-plates-of-food-hatqfX3b9Vo'},
  cuisines: { type: String, required: true},
  city: { type: String, default: 'Anytown'},
  state: { type: String, default: 'USA'},
  founded: {
    type: Number,
    min: [1762],
    max: [new Date().getFullYear(), 'Ok, I see you manifesting!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}


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