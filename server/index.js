const express = require("express");
const app = express();
const path = require("path");
const data = require("./Data/postData");
app.use(express.static(path.resolve(__dirname, "../dist")));
app.get("/data", (request, response) => {
  response.json(data);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server is running"));
