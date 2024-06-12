import express from 'express';
import { createSalle, getSalles, getSalleById, updateSalle, deleteSalle } from '../controllers/salleController';

const router = express.Router();

// Create User
router.post('/', createSalle);

// Read Users
router.get('/', getSalles);

// Read User by ID
router.get('/:id', getSalleById);

// Update User
router.put('/:id', updateSalle);

// Delete User
router.delete('/:id', deleteSalle);

export default router;
