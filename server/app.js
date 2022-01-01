const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const APP_PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));

app.get("/api/ping", (req, res) => {
  res.status(200).json({ response: "pong" });
});

const notes = [
  {
    title: "Prvá poznámka",
    content: ["Moja prvá poznámka"],
  },
  {
    content: ["Test poznámka"],
  },
];

app.get("/api/notes", (req, res) => {
  res.status(200).json(notes);
});

app.put("/api/notes", (req, res) => {
  const newNote = req.body;
  notes.push(newNote);
  res.status(200).json(notes);
});

app.all("/*", function (req, res, next) {
  // Just send the index.html for other files to support HTML5Mode
  res.sendFile("index.html", { root: distPath });
});

const server = app.listen(APP_PORT, () => {
  console.log(`Server started on port ${server.address().port}.`);
});
