import Product from '../model/product'
import APIFilters from '../utils/APIFilters';

// Post All Products
export const  newProduct = async(req, res, next) =>{
    const product = await Product.create(req.body);
    res.status(201).json({
        product
    })
}

// Get All products
export  const getProducts = async(req, res, next) =>{

    const resPerPage = 0
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

