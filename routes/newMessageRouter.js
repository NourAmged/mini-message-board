const { Router } = require("express");

const newMessage = require("../controllers/newMessage");
const messages = require("../messages");

const newMessageRouter = Router();


newMessageRouter.get("/", newMessage);

newMessageRouter.post("/", (req, res) => {
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    });

    res.redirect("/");
});

module.exports = newMessageRouter;