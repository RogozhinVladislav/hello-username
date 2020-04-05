const express = require("express");
const cors = require("cors");
const db = require("./database.js");
const routes = require('./api/routes/v1')

const PORT = 8000;

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/v1', routes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
