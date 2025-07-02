const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const validateProduct = require('../middlewares/validateProduct');

router.post('/', validateProduct, controller.createProduct);
router.get('/', controller.getAllProducts);
router.get('/:id', controller.getProductById);
router.put('/:id', validateProduct, controller.updateProduct);
router.delete('/:id', controller.deleteProduct);

module.exports = router;
