const messages = require("../messages");

function getDetailedMessage(req, res) {
    const { messageId } = req.params;
    res.render('message', { message: messages[messageId] })
}

module.exports = getDetailedMessage;