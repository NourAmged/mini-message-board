const { Router } = require("express");

const newMessage = require("../controllers/newMessage");
const postMessage = require("../controllers/postMessage");

const newMessageRouter = Router();

newMessageRouter.get("/", newMessage);

newMessageRouter.post("/", postMessage);

module.exports = newMessageRouter;