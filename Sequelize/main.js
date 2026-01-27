const sequelize = require("./config/db.js");
const User = require("./models/users.model.js");

async function main() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    await sequelize.sync();

    // Use findOrCreate to avoid duplicate errors on restart
    await User.findOrCreate({
      where: { email: "sahil@gmail.com" },
      defaults: { name: "Sahil", password: "hashedpass" }
    });

    await User.findOrCreate({
      where: { email: "piyush@gmail.com" },
      defaults: { name: "Piyush", password: "hashedpass" }
    });

    await User.findOrCreate({
      where: { email: "vivek@gmail.com" },
      defaults: { name: "Vivek", password: "hashedpass" }
    });

    const users = await User.findAll();
    const oneUser = await User.findOne({ where: { email: "sahil@gmail.com" } });

    console.log(users);
    console.log(oneUser);

  } catch (error) {
    console.error("Error:", error);
  }
}

main();
