import express from 'express';
import { registerEntrepreneur, loginEntrepreneur } from '../controllers/entrepreneurController.js';

const router = express.Router();

router.post('/register', registerEntrepreneur);
router.post('/login', loginEntrepreneur);

export default router;
