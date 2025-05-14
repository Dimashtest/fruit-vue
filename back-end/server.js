const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes'); // Подключаем userRoutes 
const allFruitsRoutes = require('./routes/allFruitsRoutes')
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path')
app.use('/images', express.static(path.join(__dirname, 'public/images')))
// Middleware 
app.use(cors());
app.use(bodyParser.json());
// Использование роутов 
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes); // Подключаем защищенные маршруты  пользователей
app.use('/api/allFruits', allFruitsRoutes)
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
}); 