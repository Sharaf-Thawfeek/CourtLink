import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    court: { type: mongoose.Schema.Types.ObjectId, ref: "Court", required: true },
    date: { type: String, required: true }, // Example: "2025-04-02"
    timeSlot: { type: String, required: true }, // Example: "10:00 AM - 11:00 AM"
    status: { type: String, enum: ["pending", "confirmed", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", BookingSchema);
