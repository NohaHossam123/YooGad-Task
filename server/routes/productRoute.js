const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllar');

router.post('/', productController.createProduct);
router.get('/:id', productController.getProductsSellar)
router.delete('/',productController.deleteProduct)
router.get('/',productController.getAllProducts)
router.put('/:id',productController.updateProduct)

module.exports = router