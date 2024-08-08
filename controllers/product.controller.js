const Product = require('../models/product.model.js');


// Xreate Product API
const createProduct = async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(error){
        res.status(500).json({"Error Message": error.message});
    }
}

// Get all products API
const getProducts = async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error){
        res.status(500).json({"Error Message": error.message});
    }
}


// API for getting a particular product
const getProduct = async(req, res) => {
    try{
        const product = await Product.find({_id: req.params.id});

        if(!product)
            res.status(404).json({"Error Message": "Product not found"});

        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({"Error Message": error.message});
    }
}


// API for deleting a particular product
const deleteProduct = async(req, res) => {
    try{
        const product = await Product.findByIdAndDelete({_id: req.params.id});
        
        if(!product)
            res.status(404).json({"Error Message": "Product not found"});
        
        res.status(200).json({"Message": "Product deleted successfully!!"});
    }
    catch(error){
        res.status(500).json({"Error Message": error.message});
    }
}


// API for updating a particular product
const updateProduct = async(req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);

        if(!product)
            res.status(404).json({"Error Message": "Product not found"});
        

            const updatedProduct = await Product.find({_id: req.params.id});
            res.status(200).json(updatedProduct);
    }
    catch(error){
        res.status(500).json({"Error Message": error.message});
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}