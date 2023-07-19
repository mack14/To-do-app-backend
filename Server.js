const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config({ path: "config.env" });

const app = express();
const PORT = process.env.port || 8080;

app.use(express.json());
app.use(cors());

const url = process.env.MONGODB_URL;
const routes = require("./routes/ToDoRoutes");

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to mongodb"))
  .catch((err) => console.log(err));

app.use(routes);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
