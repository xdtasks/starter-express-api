const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
app.get('/h',(req, res) => {
    console.log("hii")
    res.send("hey")
})
app.listen(process.env.PORT || 3000)
