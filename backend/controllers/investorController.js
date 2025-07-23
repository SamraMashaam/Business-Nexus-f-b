import Investor from '../models/Investor.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register Investor
export const registerInvestor = async (req, res) => {
  try {
    const { name, email, password, organizations, investmentRange, investmentInterests } = req.body;

    // Check if user already exists
    const existingUser = await Investor.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Investor already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new investor
    const investor = new Investor({
      name,
      email,
      password: hashedPassword,
      organizations,
      investmentRange,
      investmentInterests,
    });

    await investor.save();

    res.status(201).json({ message: 'Investor registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login Investor
export const loginInvestor = async (req, res) => {
  try {
    const { email, password } = req.body;

    const investor = await Investor.findOne({ email });
    if (!investor) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, investor.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: investor._id, type: 'investor' }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({
      token,
      investor: {
        id: investor._id,
        name: investor.name,
        email: investor.email,
        organizations: investor.organizations,
        investmentRange: investor.investmentRange,
        investmentInterests: investor.investmentInterests,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get investor profile
export const getInvestorProfile = async (req, res) => {
  try {
    const investor = await Investor.findById(req.user.id).select('-password');
    if (!investor) return res.status(404).json({ message: 'Investor not found' });
    console.log("Sending back investor:", investor);
    res.status(200).json(investor);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update investor profile
export const updateInvestorProfile = async (req, res) => {
  try {
    const { name, email, organizations, investmentRange, investmentInterests } = req.body;
    console.log("Incoming data:", req.body);
    const updatedInvestor = await Investor.findByIdAndUpdate(
      req.user.id,
      {
        name,
        email,
        organizations,
        investmentRange,
        investmentInterests,
      },
      { new: true }
    ).select('-password');

    if (!updatedInvestor) return res.status(404).json({ message: 'Investor not found' });

    res.status(200).json(updatedInvestor);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
