// models/Entrepreneur.js
import mongoose from 'mongoose';

const entrepreneurSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  startupName: { type: String },
  industry: { type: String }, // e.g., 'FinTech'
  pitchSummary: { type: String }
}, { timestamps: true });

const Entrepreneur = mongoose.model("Entrepreneur", entrepreneurSchema);
export default Entrepreneur;
