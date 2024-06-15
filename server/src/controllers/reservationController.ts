import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const generateCode = (): number => {
    return Math.floor(1000 + Math.random() * 9000);
};

// Create Reservation
export const createReservation = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, salleId, dateReservation, heureReservation, duration } = req.body;
        
        // Generate a 4-digit code
        const code = generateCode();

        // Create the reservation
        const newReservation = await prisma.reservation.create({
            data: {
                userId: Number(userId),
                salleId: Number(salleId),
                dateReservation,
                heureReservation,
                duration: Number(duration),
                code,
            },
        });

        // Send the response
        res.status(201).json(newReservation);
    } catch (error) {
        console.error('Error creating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read Reservations
export const getReservations = async (req: Request, res: Response): Promise<void> => {
    try {
        const reservations = await prisma.reservation.findMany({
          include: {
            user: {
              select: {
                id: true,
                username: true,
                role: true,
                email: true,
                phoneNumber: true,
                CEN: true,
                profile: true,
              },
            },
            salle: {
              select: {
                id: true,
                number: true,
                type: true,
                capacity: true,
              },
            },
          },
          orderBy: {
            id: "desc",
          },
        });
        res.json(reservations);
    } catch (error) {
        console.error('Error getting reservations:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read Reservation by ID
export const getReservationById = async (req: Request, res: Response): Promise<void> => {
    try {
        const reservationId = parseInt(req.params.id);
        const reservation = await prisma.reservation.findUnique({
            where: { id: reservationId },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        role: true,
                        email: true,
                        phoneNumber: true,
                        CEN: true,
                        profile: true,
                    },
                },
                salle: {
                    select: {
                        id: true,
                        number: true,
                        type: true,
                        capacity: true,
                    },
                },
            },
        });
        if (!reservation) {
            res.status(404).json({ error: 'Reservation not found' });
            return;
        }
        res.json(reservation);
    } catch (error) {
        console.error('Error getting reservation by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update Reservation
export const updateReservation = async (req: Request, res: Response): Promise<void> => {
    try {
        const reservationId = parseInt(req.params.id);
        const { userId, salleId, dateReservation, heureReservation, duration, code } = req.body;

        const updatedReservation = await prisma.reservation.update({
            where: { id: reservationId },
            data: {
                userId: Number(userId),
                salleId: Number(salleId),
                dateReservation,
                heureReservation,
                duration: Number(duration),
                code,
            },
        });

        res.json(updatedReservation);
    } catch (error) {
        console.error('Error updating reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete Reservation
export const deleteReservation = async (req: Request, res: Response): Promise<void> => {
    try {
        const reservationId = parseInt(req.params.id);
        await prisma.reservation.delete({
            where: { id: reservationId },
        });
        res.json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        console.error('Error deleting reservation:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
