require("dotenv").config()
const express = require("express")
const session = require("express-session")

const checkForSession = require("./middlewares/checkForSession")
const sc = require("./controllers/swag_controller")
const ac = require("./controllers/auth_controller")

const app = express()
const { PORT_SERVER, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
)
app.use(checkForSession)

app.get(`/api/swag`, sc.read)

app.post(`/api/register`, ac.register)
app.post(`/api/login`, ac.login)
app.post(`/api/signout`, ac.signout)
app.get(`/api/user`, ac.getUser)

app.listen(PORT_SERVER, () => {
  console.log(`The Red Coats are Coming on ${PORT_SERVER}`)
})
