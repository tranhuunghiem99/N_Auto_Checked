// const express = require("express");
// const app = express();

// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// app.post("/submit", (req, res) => {
//   const options = req.body.options.join(",");
//   const selection = req.body.selection;
//   console.log(`Options checked: ${options}`);
//   console.log(`Selection made: ${selection}`);
//   res.send(`Options checked: ${options}\nSelection made: ${selection}`);
// });

// app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// });

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const option = req.body.option;
  const selection = req.body.selection;
  console.log(`Option selected: ${option}`);
  console.log(`Selection made: ${selection}`);
  res.send(`Option selected: ${option}\nSelection made: ${selection}`);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});