const db = require("../../database.js");

class User {
  getAllUsers() {
    const sql = "SELECT id, username FROM user";
    const params = [];

    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  getUserById({ id }) {
    const sql = "SELECT * FROM user WHERE id = ?";
    const params = [id];

    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) {
          if (err) reject(err);
        }
        resolve(row);
      });
    });
  }

  getUserByName({ username }) {
    const sql = "SELECT * FROM user WHERE username = ?";
    const params = [username];

    return new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => {
        if (err) {
          if (err) reject(err);
        }
        resolve(row);
      });
    });
  }

  createNewUser({ username, password }) {
    const sql = "INSERT INTO user (username, password) VALUES (?,?)";
    const params = [username, password];

    return new Promise((resolve, reject) => {
      db.run(sql, params, function (err, result) {
        if (err) reject(err);
        resolve({
          username,
          password,
        });
      });
    });
  }

  deleteUser({ id }) {
    const sql = "DELETE FROM user WHERE id = ?";
    const params = [id];

    return new Promise((resolve, reject) => {
      db.run(sql, params, (err, row) => {
        if (err) {
          if (err) reject(err);
        }
        resolve(row);
      });
    });
  }
}

module.exports = new User();
