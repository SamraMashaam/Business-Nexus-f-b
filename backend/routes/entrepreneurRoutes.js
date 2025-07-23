import express from 'express';
import { registerEntrepreneur, loginEntrepreneur, getEntrepreneurProfile, updateEntrepreneurProfile } from '../controllers/entrepreneurController.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post('/register', registerEntrepreneur);
router.post('/login', loginEntrepreneur);
router.get("/profile", authMiddleware("entrepreneur"), getEntrepreneurProfile);
router.put("/profile/update", authMiddleware("entrepreneur"), updateEntrepreneurProfile);

export default router;
