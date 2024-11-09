const express = require("express");
const app = express();
const data = require("./data.json");

require("dotenv").config();

app.get("/api/data", (req, res) => {
  res.status(200).send(data);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
