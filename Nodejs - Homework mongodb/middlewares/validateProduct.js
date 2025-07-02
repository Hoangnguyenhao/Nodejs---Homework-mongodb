const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  if (!name || typeof name !== 'string') {
    return res.status(400).json({ message: 'Invalid or missing product name' });
  }

  if (price === undefined || typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'Invalid or missing product price' });
  }

  next();
};

module.exports = validateProduct;
