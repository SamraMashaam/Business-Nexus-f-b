import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import Entrepreneur from "../models/Entrepreneur.js";
import Investor from "../models/Investor.js";

const authMiddleware = (userType) => async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "No token provided" });
  
  const token = authHeader.split(" ")[1];

  try {
    console.log('1authHeader:', authHeader);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    console.log('decoded:', decoded);

    if (decoded.type !== userType)
      return res.status(403).json({ message: "Invalid user type" });

    req.user = decoded; // req.user.id and req.user.type now available
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token", error: err.message });
  }
};

export default authMiddleware;
