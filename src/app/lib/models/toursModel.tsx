import mongoose from "mongoose";

const toursSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

const ToursSchema = mongoose.models.Tours || mongoose.model("Tours", toursSchema);

export default ToursSchema;