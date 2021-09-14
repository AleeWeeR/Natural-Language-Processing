const dotenv = require('dotenv');
dotenv.config();

let path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')


const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})
