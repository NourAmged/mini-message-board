const { Router } = require("express");
const getMessages = require("../controllers/getMessages");

const indexRouter = Router();

indexRouter.get("/", getMessages);

module.exports = indexRouter;