const express = require("express");

const app = express();
app.use(express.json());

app.post("/", (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== "string") {
    return res.status(400).json({ error: "You did the wrong thing Trash panda, input a string and be a proper raccoon whisperer" });
  }

  const sortedArray = data.toLowerCase().trim().split("").sort((a, b) => a.localeCompare(b));

  return res.status(200).json({ word: sortedArray });
/*
});
  app.listen(3000, () => {
  console.log("Server running on port 3000");
*/
});

module.exports = app;