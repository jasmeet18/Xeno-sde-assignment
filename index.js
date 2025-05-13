const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("Node Backend"));
app.listen(3001);