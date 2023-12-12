const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Peace to the World!')
}
)

app.listen(PORT, () => {
    console.log('listening on port', PORT)
})