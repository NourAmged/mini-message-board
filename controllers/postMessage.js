const { insertMessage } = require("../db/queries");

async function postMessage(req, res) {

    await insertMessage(req.body);

    res.redirect("/");
}

module.exports = postMessage;