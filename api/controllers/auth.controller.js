const { validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require("../models/user.model");

module.exports = {
  async register(req, res, next) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при регистрации',
        })
      }

      const { username, password } = req.body
      const candidate = await User.getUserByName({ username })

      if (candidate) {
        return res.status(400).json({ message: 'Пользователь с таким логином уже существует' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = User.createNewUser({ username, password: hashedPassword })

      res.status(201).json({ message: 'Регистрация прошла успешно, новый пользователь зарегистрирован' })
    } catch (error) {
      res.status(500).json({ error, message: 'Что-то пошло не так, попробуйте снова' })
      next(error);
    }
  },
  async login(req, res, next) {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему',
        })
      }

      const { username, password } = req.body

      const user = await User.getUserByName({ username })
      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
      }

      const token = jwt.sign(
        { userId: user.id },
        'hello',
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id })

    } catch (error) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
      next(error);
    }
  },
}
