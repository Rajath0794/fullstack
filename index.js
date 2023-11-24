const express = require("express");
const app = express();
const ejs = require('ejs')
const expressSession = require('express-session')
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://rkadampanattu7459:test123@cluster0.dqordub.mongodb.net/testdatabase1?retryWrites=true&w=majority' , {useNewUrlParser:true})
const User = require('./models/User')

const g2Save = require('./controllers/g2Save')
const dashboard = require('./controllers/dashboard')
const g = require('./controllers/g')
const g2 = require('./controllers/g2')
const g2Update = require('./controllers/g2Update')
const gFind = require('./controllers/g')
const login = require('./controllers/login')
const loginCheck = require('./controllers/loginCheck')
const signUp = require('./controllers/signUp')
const validateMiddleware = require('./middleware/validationMiddleware')
const redirectIfLoggedIn = require('./middleware/redirectIfLoggedIn')
const driverMiddleware = require('./middleware/driverMiddleware')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(expressSession(
  {
      secret: "Revera"
  }
))

app.use('*',  (req, res, next) => {
  userId = req.session.userId;
  userType = req.session.userType;
  next()
})
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(4000, () => {
  console.log("App listening on port 4000");
});
 
app.get('/', dashboard)
app.get('/g', driverMiddleware, g)
app.get('/g2', driverMiddleware, g2)
app.post('/g2/save', g2Save)
app.post('/g2/update', g2Update)
app.post('/login', loginCheck)
app.post('/signup', signUp)
app.get('/login', redirectIfLoggedIn, login)