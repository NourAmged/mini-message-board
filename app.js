const express = require("express");
const path = require("node:path");

const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

const PORT = 3000;

const app = express();

const assetsPath = path.join(__dirname, "public");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));

app.use('/', indexRouter);
app.use('/new', newMessageRouter);

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
});