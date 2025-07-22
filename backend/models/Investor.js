// models/Investor.js
import mongoose from 'mongoose';

const investorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  organizations: [String],
  investmentRange: { type: String }, // e.g., "$5k - $50k"
  investmentInterests: [String], // e.g., ['Tech', 'Healthcare']
}, { timestamps: true });

const Investor = mongoose.model("Investor", investorSchema);
export default Investor;
