const express = require("express");
const { check } = require("express-validator");
const authController = require("../../controllers/auth.controller");

const router = express.Router();

router
  .route("/register")
  .post(
    [
      check("password", "Минимальная длина пароля 6 символов").isLength({
        min: 6,
      }),
    ],
    authController.register
  );
router
  .route("/login")
  .post(
    [
      check("username", "Введите имя пользователя").exists(),
      check("password", "Введите пароль").exists(),
    ],
    authController.login
  );

module.exports = router;
