import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Investor from '../models/Investor.js';
import Entrepreneur from '../models/Entrepreneur.js';

const router = express.Router();

// Login Route
router.post('/login', async (req, res) => {
  const { email, password, role } = req.body;

  try {
    let user;
    if (role === 'investor') {
      user = await Investor.findOne({ email });
    } else if (role === 'entrepreneur') {
      user = await Entrepreneur.findOne({ email });
    } else {
      return res.status(400).json({ message: 'Invalid role' });
    }

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id, type: role }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log("Token being sent:", token);
    res.status(200).json({
      message: 'Login successful',
      token,
      user: { name: user.name, email: user.email, role }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
