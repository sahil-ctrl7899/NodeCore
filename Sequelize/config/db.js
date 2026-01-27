const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Gamerz", "postgres", "sahilboy9565", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
  // logging: console.log
});

module.exports = sequelize;

