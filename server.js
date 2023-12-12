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

app.get('/', (req, res) => {
    res.render('home')
}
)

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</>')
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})