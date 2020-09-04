const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (_req, res) => res.send("<h1>Server under construction :)</h1>"));

app.listen(PORT, console.log(`Server running at port ${PORT}`));
