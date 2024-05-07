const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const options = req.body.options.join(",");
  console.log(`Options checked: ${options}`);
  res.send(`Options checked: ${options}`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});