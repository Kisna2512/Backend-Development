import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    typeof: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: String,
  isActive: Boolean,
});

export const User = mongoose.model("User", userSchema);
