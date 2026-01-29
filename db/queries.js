const pool = require("./pool");

async function Messages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function DetailedMessage(messageId) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = ($1)", [messageId]);
    return rows
}

async function insertMessage(message) {
    const { username, text } = message;
    await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text]);
}

module.exports = {
    Messages,
    DetailedMessage,
    insertMessage
}