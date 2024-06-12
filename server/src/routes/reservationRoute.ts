import express from 'express';
import { createReservation, getReservations, getReservationById, updateReservation, deleteReservation } from '../controllers/reservationController';

const router = express.Router();

// Create User
router.post('/', createReservation);

// Read Users
router.get('/', getReservations);

// Read User by ID
router.get('/:id', getReservationById);

// Update User
router.put('/:id', updateReservation);

// Delete User
router.delete('/:id', deleteReservation);

export default router;
