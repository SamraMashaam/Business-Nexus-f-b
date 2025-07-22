import express from 'express';
import { registerInvestor, loginInvestor } from '../controllers/investorController.js';
import { getInvestorProfile, updateInvestorProfile } from '../controllers/investorController.js';
import { protectInvestor } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerInvestor);
router.post('/login', loginInvestor);
router.get('/profile', getInvestorProfile);
router.put('/profile', updateInvestorProfile);


export default router;
