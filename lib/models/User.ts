import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    
    isBoarded: {
      type: Boolean,
      default: false
    },
    // mobile_number: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("users", userSchema);