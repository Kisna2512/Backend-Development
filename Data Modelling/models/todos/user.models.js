import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    typeof: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  email: {
    typeof: String,
    required: true,
    unique: true,
  },
  password: {
    typeof: String,
    required: true,
  },
  isActive: Boolean,
});

export const User = mongoose.model("User", userSchema);
