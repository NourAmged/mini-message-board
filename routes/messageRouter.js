const { Router } = require("express");
const getDetailedMessage = require("../controllers/getDetailedMessage")

const messageRouter = Router();

messageRouter.get("/:messageId", getDetailedMessage);

module.exports = messageRouter;