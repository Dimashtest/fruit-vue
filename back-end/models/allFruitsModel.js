const db = require('../config/database');
const mysql = require('mysql2/promise');

const pool = mysql.createPool(db);

const Fruits = {
    getFruits: async () => {
        try {
            // Оборачиваем название таблицы в обратные кавычки
            const [rows] = await pool.execute('SELECT * FROM `all-fruits`');
            return rows;
        }
        catch (error) {
            console.error('Ошибка в модели Fruits: ', error);
            throw error;
        }
    },
};

module.exports = {
    Fruits,
};
