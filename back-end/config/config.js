require('dotenv').config({ path: '../.env' });


module.exports = {
    jwtSecret: process.env.JWT_SECRET || 'secret',
    // Другие глобальные настройки 
}; 