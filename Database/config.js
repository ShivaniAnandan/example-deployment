import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoDBConnectionString = process.env.MONGO_DB_CONNECTION_STRING;

const connectDB = async () => {
    try {
        if (!mongoDBConnectionString) {
            throw new Error("MongoDB connection string is undefined.");
        }

        const connection = await mongoose.connect(mongoDBConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB");
    } catch (error) {
        console.error("Error connecting to DB:", error.message || error);
    }
};

export default connectDB;
