import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectMongoDb = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error('Database connection string is missing');
        }
        await mongoose.connect(mongoUrl);
        console.log("Database connected successfully");
    } catch (err) {
        console.error("Error while connecting to the database:", err);
    }
};

export default connectMongoDb;
