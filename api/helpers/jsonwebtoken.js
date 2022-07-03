const jwt = require('jsonwebtoken');
const secretWord = process.env.SECRET_WORD || 'rahasia';

const tokenGenerator = (data) => {
    const {
        id,
        user_name,
        user_email,
        user_birthdate,
        user_gender,
        user_avatar,
        user_type
    } = data;
    return jwt.sign({
        id,
        user_name,
        user_email,
        user_birthdate,
        user_gender,
        user_avatar,
        user_type
    }, secretWord, {
        expiresIn: "1h"
    })
};

const tokenVerifier = (data) => {
    return jwt.verify(data, secretWord)
};

module.exports = {
    tokenGenerator, tokenVerifier
};