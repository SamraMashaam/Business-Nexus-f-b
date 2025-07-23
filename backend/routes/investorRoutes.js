import express from 'express';
import { registerInvestor, loginInvestor } from '../controllers/investorController.js';
import { getInvestorProfile, updateInvestorProfile } from '../controllers/investorController.js';
import authMiddleware from "../middleware/authMiddleware.js";


const router = express.Router();

router.post('/register', registerInvestor);
router.post('/login', loginInvestor);
router.get("/profile", authMiddleware("investor"), getInvestorProfile);
router.put('/profile/update', authMiddleware("investor"), updateInvestorProfile);


export default router;
