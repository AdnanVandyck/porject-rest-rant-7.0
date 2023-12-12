// DEPNDENCIES
const express = require('express')

// CONFIG
require('dotenv').config()
const PORT =process.env.PORT
const app = express()

// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


app.use('/places', require('./controllers/places_controller'))

// HOMEPAGE
app.get('/', (req, res) => {
    res.render('home')
}
)

// 404
app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})