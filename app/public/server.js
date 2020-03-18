const express = require("express");

const app = express();

app.post("/", (req, res) => {
  res.json({ name: "Suvankar", city: "Kolkata" });
});

app.listen(5000, () => console.log("App running on port 5000 🔥"));
