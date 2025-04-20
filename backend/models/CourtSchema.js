import mongoose from "mongoose";

const CourtSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    pricePerHour: { type: Number, required: true },
    availableSlots: { type: [String], required: true }, // Example: ["09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"]
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Court", CourtSchema);
