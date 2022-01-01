const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const APP_PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const distPath = path.join(__dirname, "../public");
app.use(express.static(distPath));

app.get("/api/ping", function (req, res) {
  res.status(200).json({ response: "pong" });
});

const server = app.listen(APP_PORT, () => {
  console.log(`Server started on port ${server.address().port}.`);
});
