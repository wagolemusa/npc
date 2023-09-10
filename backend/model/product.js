import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please enter Product name']
    },
    description: {
        type: String,
        required: [true, 'Please enter Product Decsription']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
    },
    images: [
        {
            public_id: {
                type: String,
            },
            url: {
                type: String,
            },

        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter product category'],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports"
            ],
            message: "Please select correct category"
        }

    },
    seller: {
        type: String,
        required: [true, "Please enter product seller"],
    },
    stock: {
        type: Number,
        required: [true, "please enter product stock"],

    },
    ratings: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            rating:{
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            },
            createdAt:{
                type: Date,
                default: Date.now,
            },
        },
    ],
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Product || 
mongoose.model("Product", productSchema);

