const path = require("path");
const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const app = express();

app.use(
  "/api",
  createProxyMiddleware({
    target: "https://api.github.com",
    changeOrigin: true,
    pathRewrite: { "^/api": "" },
  })
);

app.use(express.static(path.join(__dirname, "dist")));
app.get("*", (_req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});
app.listen(8080, () => {
  console.log("Application listening on port 8080!");
});
