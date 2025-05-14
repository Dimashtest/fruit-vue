const FruitModel = require('../models/allFruitsModel');

const getAllFruits = async (req, res) => {
  try {
    const fruits = await FruitModel.getAllFruits();
    res.json(fruits);
  } catch (error) {
    console.error('Ошибка при получении фруктов:', error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
};

module.exports = {
  getAllFruits,
};
