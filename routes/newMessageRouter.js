const { Router } = require("express");
const newMessage = require("../controllers/newMessage");

const newMessageRouter = Router();

newMessageRouter.get("/", newMessage);

module.exports = newMessageRouter;