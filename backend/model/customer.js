import  mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    describeLocation: {
        type: String,
        required: false
    },
    cylinderType: {
        type: String,
        required: true
    },
    cylinderSize: {
        type: String,
        required: false
    },
    points: {
        type: String,
        required: true
    },
    numberOfDays: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})

export default mongoose.models.Customer || mongoose.model("Customer", customerSchema)