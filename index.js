const express = require("express");
const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/page1", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page1.html"));
});

app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "page2.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
