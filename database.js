var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username text UNIQUE, 
            password text, 
            CONSTRAINT username_unique UNIQUE (username)
            )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO user (username, password) VALUES (?,?)";
          db.run(insert, ["admin", "admin123456"]);
          db.run(insert, ["user", "user123456"]);
        }
      }
    );
  }
});

module.exports = db;
