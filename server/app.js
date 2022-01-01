const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const APP_PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const distPath = path.join(__dirname, "../dist/angular-notes");
app.use(express.static(distPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.get("/api/ping", (req, res) => {
  res.status(200).json({ response: "pong" });
});

const server = app.listen(APP_PORT, () => {
  console.log(`Server started on port ${server.address().port}.`);
});
