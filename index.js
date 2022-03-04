require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.APP_PORT || 8080

console.log('teste',PORT)
app.set('view engine', 'ejs');
app.use('public', express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('',(req,res)=>{
    res.render('home/index')
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})