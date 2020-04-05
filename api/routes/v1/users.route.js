const express = require("express");
const { check } = require("express-validator");
const usersController = require("../../controllers/users.controller");

const router = express.Router();

router.route("/").get(usersController.list);
router.route("/:id").get(usersController.getUserById);

module.exports = router;
