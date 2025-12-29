import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (mongoose.connection.readyState >= 1) {
            console.log("MongoDB already connected");
            return;
        }

        const DB_details = {
            dbName: process.env.DB_NAME,
        }
        await mongoose.connect("mongodb://127.0.0.1:27017", DB_details);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        throw error; 
    }
}

export default connectDB;