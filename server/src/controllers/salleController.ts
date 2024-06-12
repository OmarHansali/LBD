import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create Salle
export const createSalle = async (req: Request, res: Response): Promise<void> => {
    try {
        const { number, type, capacity, availability } = req.body;

        // Create the salle
        const newSalle = await prisma.salle.create({
            data: {
                number,
                type,
                capacity,
                availability,
            },
        });

        // Send the response
        res.status(201).json(newSalle);
    } catch (error) {
        console.error('Error creating salle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read Salles
export const getSalles = async (req: Request, res: Response): Promise<void> => {
    try {
        const salles = await prisma.salle.findMany();
        res.json(salles);
    } catch (error) {
        console.error('Error getting salles:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read Salle by ID
export const getSalleById = async (req: Request, res: Response): Promise<void> => {
    try {
        const salleId = parseInt(req.params.id);
        const salle = await prisma.salle.findUnique({
            where: { id: salleId },
        });
        if (!salle) {
            res.status(404).json({ error: 'Salle not found' });
            return;
        }
        res.json(salle);
    } catch (error) {
        console.error('Error getting salle by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update Salle
export const updateSalle = async (req: Request, res: Response): Promise<void> => {
    try {
        const salleId = parseInt(req.params.id);
        const { number, type, capacity, availability } = req.body;

        const updatedSalle = await prisma.salle.update({
            where: { id: salleId },
            data: {
                number,
                type,
                capacity,
                availability,
            },
        });

        res.json(updatedSalle);
    } catch (error) {
        console.error('Error updating salle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete Salle
export const deleteSalle = async (req: Request, res: Response): Promise<void> => {
    try {
        const salleId = parseInt(req.params.id);
        await prisma.salle.delete({
            where: { id: salleId },
        });
        res.json({ message: 'Salle deleted successfully' });
    } catch (error) {
        console.error('Error deleting salle:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
