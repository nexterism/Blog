const express = require("express");
const app = express();
const path = require("path");
const data = require("./Data/postData");
app.use(express.static(path.resolve(__dirname, "../dist")));
app.get("/data", (request, response) => {
  response.json(data);
});

app.listen(3300, () => console.log("server is running"));
