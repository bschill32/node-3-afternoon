const users = require("../models/users")

let id = 1

module.exports = {
  login: (req, res, next) => {
    const { session } = req
    const { username, password } = req.body

    const user = users.find((item, i, arr) => {
      return item.username === username && item.password === password
    })

    if (user) {
      session.user.username = user.username
      res.status(200).send(session.user)
    } else {
      res.status(500).send(`Unauthoriezed.`)
    }
  },

  register: (req, res, next) => {
    const { session } = req
    const { username, password } = req.body

    const newUser = {
      id,
      username,
      password
    }

    users.push(newUser)
    id++

    session.user.username = username

    res.status(200).send(session.user)
  },

  signout: (req, res, next) => {
    const { session } = req
    session.destroy()
    res.status(200).send(session)
  },

  getUser: (req, res, next) => {
    res.status(200).send(req.session.user)
  }
}
