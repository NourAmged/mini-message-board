const { DetailedMessage } = require("../db/queries")

async function getDetailedMessage(req, res) {
    const { messageId } = req.params;
    const [message] = await DetailedMessage(messageId);
    res.render('message', { message: message })
}

module.exports = getDetailedMessage;