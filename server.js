
var express = require('express');
const app = express();
const bodyparser = require('body-parser');
const routes = require('./routes/fileroutes')
const PORT = 8080;


var cors = require('cors');
app.use(cors());

app.use(bodyparser.json());

app.use("/api", routes);
app.get("/", (req, res) => res.send("Welcome to the file API!"));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));