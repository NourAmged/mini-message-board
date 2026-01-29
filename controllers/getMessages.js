const { Messages } = require("../db/queries");

async function getMessages(req, res) {
    const messages = await Messages();
    res.render("index", { messages: messages, messagesNum: messages.length });
}

module.exports = getMessages;