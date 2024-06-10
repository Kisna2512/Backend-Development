import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
    experienceInyears: {
      type: Number,
      required: true,
      default: 1,
    },
    worksInhospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
