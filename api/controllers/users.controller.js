const { validationResult } = require("express-validator");
const User = require("../models/user.model");

module.exports = {
  async list(req, res, next) {
    try {
      const users = await User.getAllUsers();
      console.log(users)
      res.json(users);
    } catch (error) {
      res.status(500).send(error);
      next(error);
    }
  },
  async getUserById(req, res, next) {
    try {
      const user = await User.getUserById({ id: req.params.id });
      res.json(user);
    } catch (error) {
      res.status(500).send(error);
      next(error);
    }
  },
};
