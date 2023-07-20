const express = require('express')
const app = express()
const port = 3000
const get = require('./m1')
const consume = require('./m2')

app.get('/qwerty', (req, res) => {
    var ans = get(req); 
    if (ans !== 'ok') return
    var ans =  consume(req);
    res.send(ans)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})