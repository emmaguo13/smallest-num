const express = require('express')
const app = express()
const port = 3000
let smallestNum = Infinity;

//finish later
app.post('/', (req, res) => {
    console.log(req.body);
    if (parseInt(req.body) < smallestNum) {
        smallestNum = req.body
        res.send("success!")
    } else {
        res.send("try again?")
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})