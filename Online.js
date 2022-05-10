var express = require('express')
var run = express()
 
run.get('/', function (req, res) {
  res.send('Running 24/7')
})
 
run.listen(3000)
 
var fetch = require('node-fetch')
function online() {
  var url = [
    "https://Mc-bott.pradeep313.repl.co"
  ]
  try {
    fetch(url)
  } catch (e) {
    online()
  }
}
online()
 
