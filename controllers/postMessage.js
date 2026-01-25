const messages = require("../messages");

function postMessage(req, res){
    messages.push({
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    });

    res.redirect("/");
}

module.exports = postMessage;