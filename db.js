const Sequelize = require("sequelize");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";

const db = new Sequelize(databaseURL);

try {
  db.sync({ force: false }).then(() => console.log("database connected"));
} catch (err) {
  console.error("Error synching database ", err);
}

module.exports = db;