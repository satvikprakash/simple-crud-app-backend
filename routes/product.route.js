const express = require('express');
const router = express.Router();
const {createProduct, getProducts, getProduct, deleteProduct, updateProduct} = require('../controllers/product.controller.js');


router.route('/')
.get(getProducts)
.post(createProduct);

router.route('/:id')
.get(getProduct)
.delete(deleteProduct)
.put(updateProduct);


module.exports = router;
