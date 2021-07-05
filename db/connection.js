const { Sequelize } = require("sequelize");

const db = new Sequelize("pruebaDB", "wendell", "123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

module.exports = db;
