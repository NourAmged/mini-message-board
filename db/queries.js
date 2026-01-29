const pool = require("./pool");

async function Messages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function DetailedMessage(messageId) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [messageId]);
    return rows
}

module.exports = {
    Messages,
    DetailedMessage
}