import mongoose from "mongoose";


const pointsSchema = mongoose.Schema({
    phone: {
        type: Number,
        required: true
    },
    cylinderSise: {
        type: String,
        required: true
    },
    cylinderType: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
})
export default mongoose.models.Points || mongoose.model("points", pointsSchema)







