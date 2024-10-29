require("dotenv").config();
const express = require("express");
const { connectDB, sequelize } = require("./config/db");
const routes = require("./routes/index");

const app = express();

connectDB();
app.use(express.json());
app.use("/api", routes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
});
