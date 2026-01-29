const { body, validationResult, matchedData } = require("express-validator");

const { insertMessage } = require("../db/queries");

const validateUser = [
    body("username").trim()
        .isAlpha().withMessage("Name must only contain letters")
        .isLength({ min: 1, max: 33 }).withMessage("Name must be between 1 and 10 characters."),
    body("text").trim()
        .isLength({ min: 1, max: 255 }).withMessage("Message must be between 1 and 255 characters.")
];


const postMessage = [
    validateUser,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", { errors: errors.array() });
        }
        const userData = matchedData(req);
        await insertMessage(userData);
        res.redirect("/");
    }
];


module.exports = postMessage;