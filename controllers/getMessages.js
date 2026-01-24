const messages = require("../messages");

function getMessages(req, res) {
    res.render("index", { messages: messages });
}

module.exports = getMessages;