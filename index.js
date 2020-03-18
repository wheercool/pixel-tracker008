var express = require('express')
var app = express()

const requests = [];
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  requests.push({ date: (new Date()).toString(), headers: req.headers});
  res.json({status: 'OK'});
})

app.get('/clear', (req, res) => {
  requests = [];
  res.json({status: 'OK'})
})

app.get('/stats', (req, res) => {
  res.json(requests)
})

app.listen(8080)
