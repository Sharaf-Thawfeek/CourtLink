import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    court: {
      type: mongoose.Types.ObjectId,
      ref: "Court",
      required: true,
    },
    player: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    reviewText: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
