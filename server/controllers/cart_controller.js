const swag = require("../models/swag")

module.exports = {
  add: (req, res, next) => {
    const { cart } = req.session.user
    const { id } = req.query
  },

  delete: (req, res, next) => {},

  checkout: (req, res, next) => {}
}
