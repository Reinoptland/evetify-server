const express = require("express");

const app = express();
const port = process.env.PORT || 4000;
const db = require("./db");

app.get("/ping", (request, response) => {
  response.send("You rang?");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
