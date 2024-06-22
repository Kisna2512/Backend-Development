import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: string,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: string,
    required: true,
    unique: true,
  },
  fullname: {
    type: string,
    required: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: string,
    required: true,
  },
  coverImage: {
    type: string,
  },
});

export const User = mongoose.model("User", userSchema);
