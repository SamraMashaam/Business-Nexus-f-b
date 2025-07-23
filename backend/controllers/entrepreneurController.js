import Entrepreneur from '../models/Entrepreneur.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register Entrepreneur
export const registerEntrepreneur = async (req, res) => {
  try {
    const { name, email, password, startupName, industry, pitchSummary } = req.body;

    const existingUser = await Entrepreneur.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Entrepreneur already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const entrepreneur = new Entrepreneur({
      name,
      email,
      password: hashedPassword,
      startupName,
      industry,
      pitchSummary,
    });

    await entrepreneur.save();

    res.status(201).json({ message: 'Entrepreneur registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Login Entrepreneur
export const loginEntrepreneur = async (req, res) => {
  try {
    const { email, password } = req.body;

    const entrepreneur = await Entrepreneur.findOne({ email });
    if (!entrepreneur) return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, entrepreneur.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: entrepreneur._id, type: 'entrepreneur' }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.status(200).json({
      token,
      entrepreneur: {
        id: entrepreneur._id,
        name: entrepreneur.name,
        email: entrepreneur.email,
        startupName: entrepreneur.startupName,
        industry: entrepreneur.industry,
        pitchSummary: entrepreneur.pitchSummary,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const getEntrepreneurProfile = async (req, res) => {
  try {
    const entrepreneur = await Entrepreneur.findById(req.user.id).select("-password");
    if (!entrepreneur) return res.status(404).json({ message: "Entrepreneur not found" });

    res.status(200).json(entrepreneur);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// controllers/entrepreneurController.js

export const updateEntrepreneurProfile = async (req, res) => {
  try {
    const { name, email, startupName, industry, pitchSummary } = req.body;
    console.log("Incoming data:", req.body);

    const updatedEntrepreneur = await Entrepreneur.findByIdAndUpdate(
      req.user.id,
      {
        name,
        email,
        startupName,
        industry,
        pitchSummary,
      },
      { new: true }
    ).select('-password');

    if (!updatedEntrepreneur)
      return res.status(404).json({ message: "Entrepreneur not found" });

    res.status(200).json(updatedEntrepreneur);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
