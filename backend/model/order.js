import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    shippingInfo: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Address'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'User'
    },
    orderItems: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            },
            name: {
                type: String,
                required: true
            },
            quantity: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            }
        }
    ],
    tax: {
        type: Number,
        required: false
    },
    amount: {
        type: Number,
        required: false
    },
    totalAmount: {
        type: Number,
        required: false
    },
    
    orderStatus: {
        type: String,
        default: 'Processing'
    },
    createAt: {
        type: Date,
        default: Date.now,
    }

})


export default mongoose.models.Order || mongoose.model("Order", orderSchema)