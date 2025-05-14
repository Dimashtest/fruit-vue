const jwt = require('jsonwebtoken');
const config = require('../config/config');
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.sendStatus(401); // Нет токена 
    }
    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403); // Недействительный токен 
        }
        req.user = user; // Добавляем информацию о пользователе в объект запроса 
        next();
    });
};
module.exports = authenticateToken; 