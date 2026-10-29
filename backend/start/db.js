import mongoose from "mongoose";
import config from "config";

export async function connectDB() {
  try {
    await mongoose.connect(config.get("database.address"), {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err.message);
    process.exit(1);
  }
}
