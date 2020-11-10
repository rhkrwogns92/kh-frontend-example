const express = require('express')
const app = express()
const port = 6600


app.use(express.static('.'))

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))


app.post('/login',(req, res) => {
    console.log('Connection has been established.')
    console.log(req.body)
})


app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})