const express = require('express')
const mongoose = require('mongoose')
const logRoutes = require('./routes/logRoutes')

const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/logs')

app.use('/api', logRoutes)
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`Log Ingestor listening at ${port}`)
})
