require("dotenv").config();

const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 33 ),
    text VARCHAR ( 255 ),
    added DATE DEFAULT CURRENT_DATE
);

INSERT INTO messages (username, text)
VALUES
    ('Amndo', 'Hi, there!'),
    ('Charles', 'Charles');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:${process.env.PORT_DB}/users`,
    });

    await client.connect();
    await client.query(SQL);
    await client.end();

    console.log("done !!!");

}

main();