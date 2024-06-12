import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController';

const router = express.Router();

// Create User
router.post('/', createUser);

// Read Users
router.get('/', getUsers);

// Read User by ID
router.get('/:id', getUserById);

// Update User
router.put('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);

export default router;
