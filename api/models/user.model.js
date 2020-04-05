const db = require("../../database.js");

class User {
  createNewUser({ username, password }) {
    var sql = "INSERT INTO user (username, password) VALUES (?,?)";
    var params = [username, password];

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

  getAllUsers() {
    const sql = "select * from user";
    const params = [];

    return new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => {
        if (err) reject(err);
        resolve(rows);
      });
    });
  }

  getUserById({ id }) {
    const sql = "select * from user where id = ?";
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
    const sql = "select * from user where username = ?";
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
}

module.exports = new User();
