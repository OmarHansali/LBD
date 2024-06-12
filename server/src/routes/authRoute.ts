import express from 'express';
const router = express.Router();
import { login } from '../controllers/authController';

//test route
router.get('/', (req, res) => {
    res.send('Hello, world!');
});

//login route
router.post('/login', login);

export default router;
