// DEPNDENCIES
const express = require('express')
const methodOverride = require('method-override')

// CONFIG
require('dotenv').config()
const app = express()
const PORT =process.env.PORT


// MIDDLEWARE

app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'))
app.use(methodOverride('_method'))

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())



// Controllers & Routes
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