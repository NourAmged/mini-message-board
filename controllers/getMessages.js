const messages = require("../messages");

function getMessages(req, res) {
    res.render("index", { messages: messages, messagesNum: messages.length });
}

module.exports = getMessages;