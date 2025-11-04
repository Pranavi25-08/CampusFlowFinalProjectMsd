import mongoose from "mongoose";

const placementSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  salary: { type: Number, required: true },
  location: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Placement", placementSchema);
