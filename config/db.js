const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite" // Ruta al archivo de la base de datos SQLite
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a SQLite exitosa");
  } catch (error) {
    console.error("Error al conectar a SQLite:", error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
