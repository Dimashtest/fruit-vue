const express = require('express');
const router = express.Router();
const { Fruits } = require('../models/allFruitsModel');

// УБИРАЕМ /api/allFruits => оставляем просто /
router.get('/', async (req, res) => {
    const { search } = req.query;

    try {
        let fruits = await Fruits.getFruits();

        if (search) {
            const searchLower = search.toLowerCase();
            fruits = fruits.filter(fruit =>
                fruit.title.toLowerCase().includes(searchLower)
            );
        }

        res.json(fruits);
    } catch (error) {
        console.error('Ошибка при получении фруктов:', error);
        res.status(500).json({ message: 'Ошибка сервера' });
    }
});

module.exports = router;
