const express = require('express');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Product Management API');
});

module.exports = app;
