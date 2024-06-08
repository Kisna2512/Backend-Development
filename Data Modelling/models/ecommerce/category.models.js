import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({}, { timeStamps: true });

export const Category = mongoose.model("Category", categorySchema);
