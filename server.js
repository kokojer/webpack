const path = require("path");
const express = require("express");
const app = express();
app.use(express.static(path.join(__dirname, "dist")));
app.get("/", (_req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.get("/home", (_req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(8080, () => {
  console.log("Application listening on port 8080!");
});
