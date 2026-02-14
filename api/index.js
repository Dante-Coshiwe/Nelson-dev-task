const express = require("express");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const { data } = req.body;

  if (typeof data !== "string") {
    return res.status(400).json({ error: "Invalid input" });
  }

  const sortedArray = data
    .toLowerCase()
    .trim()
    .split("")
    .sort((a, b) => a.localeCompare(b));

  return res.status(200).json({ word: sortedArray });
});

module.exports = app;

