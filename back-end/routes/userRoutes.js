const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authenticateToken = require('../middleware/authMiddleware');
// Пример защищенного маршрута для получения информации о текущем пользователе
router.get('/me', authenticateToken, userController.getMe);
// Другие защищенные маршруты, связанные с пользователями 
module.exports = router;