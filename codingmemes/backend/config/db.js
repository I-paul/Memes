import mongoose from 'mongoose';

export const dbConfig = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
    }
    catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); 
    }
}