// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose');







// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()

// MIDDLEWARE
const methodOverride = require('method-override')
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())




// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads')
  })
  
  // Breads
  const breadsController = require('./controllers/breads_controller.js')
  app.use('/breads', breadsController)
  
// 404 Page
app.get('*', (req, res) => {
    res.send('404')
  })
  
// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})