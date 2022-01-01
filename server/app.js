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

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const notes = [
  {
    id: uuidv4(),
    title: "Prvá poznámka",
    content: ["Moja prvá poznámka"],
  },
  {
    id: uuidv4(),
    content: ["Test poznámka"],
  },
];

app.get("/api/notes", (req, res) => {
  res.status(200).json(notes);
});

app.put("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  notes.push(newNote);
  res.status(200).json(notes);
});

app.post("/api/note", (req, res) => {
  const editNote = req.body;
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
