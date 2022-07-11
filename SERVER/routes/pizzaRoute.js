import express from 'express';
import pizza from '../api/pizza/pizza2.js';

const router = express.Router();

router.get('/', (req, res) => res.json(pizza));

export default router;
