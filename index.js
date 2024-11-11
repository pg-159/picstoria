const express = require("express");
const cors = require("cors");
const app = express();
const { sequelize } = require("./models");

const { createNewUser } = require("./controllers/dataControllers");
const { searchImages } = require("./controllers/imageController");

app.use(express.json());
app.use(cors());

app.post("/api/users", createNewUser);
app.get("/api/photos/search", searchImages);

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected.");
  })
  .catch((error) => console.error("unable to connect to database", error));

app.listen(3000, () => {
  console.log(`Server is running on port: 3000`);
});
