import Product from '../model/product'
import APIFilters from '../utils/APIFilters';
import fs from 'fs'
import { uploads } from '../utils/cloudinary';

// Post All Products
export const newProduct = async (req, res, next) => {
    // req.body.user = req.user._id;

    // console.log("xxxx",req.body.user )
    const product = await Product.create(req.body);
    res.status(201).json({
      product,
    });
  };

// Get All products
export  const getProducts = async(req, res, next) =>{

    const resPerPage = 1
    const productsCount = await Product.countDocuments()

    const apiFilters = new APIFilters(Product.find(), req.query)
    .search()
    .filter()
    // const products = await Product.find();
    const products = await apiFilters.query.clone();
    const filterdProductsCount = products.length
    apiFilters.pagination(resPerPage);

    res.status(200).json({
        productsCount,
        resPerPage,
        filterdProductsCount,
        products,
    });
}


// Get product by Id
export const getProduct = async(req, res, next) => {
    const product = await Product.findById(req.query.id);
    if(!product){
        res.status(400).json({
            error: "Product not found.",
        })
    }
    res.status(200).json({
        product,
    })
}

// Query three Data
export const querythreeProduct = async(req, res, next) => {

    const product = await Product.find().sort({_id: -1}).limit(3)
    if(!product){
        res.status(400).json({
            error: "Product not Found."
        })
    }
    res.status(200).json({
        product,
    })
}


// upload multiple images
export const uploadProductImages = async(req, res, next) => {

    let product = await Product.findById(req.query.id);

    if(!product){
        res.status(404).json({
            error: "Product not found"
        })
    }

    const uploader = async(path) => await uploads(path, "npc");
    
    const urls = []
    const files = req.files;

    for(const file of files){
        const { path } = file
        console.log("path", path)
        const imgUrl = await uploader(path)
        urls.push(imgUrl)
        fs.unlinkSync(path)
    }

    product = await Product.findByIdAndUpdate(req.query.id, {
        images: urls,
    });

    res.status(200).json({
        data: urls,
        product,
    })
    

}