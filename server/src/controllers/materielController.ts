import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create Materiel
export const createMateriel = async (req: Request, res: Response)=> {
    try {
        const { name, quantity, availability } = req.body;

        const newMateriel = await prisma.materiel.create({
            data: {
                name,
                quantity,
                availability: availability == "yes" ? true : false,
            },
        });

        // Send the response
        res.status(201).json(newMateriel);
    } catch (error) {
        console.error('Error creating materiel:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read Materiels
export const getMateriels = async (req: Request, res: Response): Promise<void> => {
    try {
        const materiels = await prisma.materiel.findMany({
          orderBy: {
            id: "desc",
          },
        });
        res.json(materiels);
    } catch (error) {
        console.error('Error getting materiels:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read Materiel by ID
export const getMaterielById = async (req: Request, res: Response): Promise<void> => {
    try {
        const materielId = parseInt(req.params.id);
        const materiel = await prisma.materiel.findUnique({
            where: { id: materielId },
        });
        if (!materiel) {
            res.status(404).json({ error: 'Materiel not found' });
            return;
        }
        res.json(materiel);
    } catch (error) {
        console.error('Error getting materiel by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update Materiel
export const updateMateriel = async (req: Request, res: Response) => {
    try {
        const materielId = parseInt(req.params.id);
        const { name, quantity, availability } = req.body;

        const updatedMateriel = await prisma.materiel.update({
            where: { id: materielId },
            data: {
                name,
                quantity,
                availability,
            },
        });

        res.json(updatedMateriel);
    } catch (error) {
        console.error('Error updating materiel:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete Materiel
export const deleteMateriel = async (req: Request, res: Response): Promise<void> => {
    try {
        const materielId = parseInt(req.params.id);
        await prisma.materiel.delete({
            where: { id: materielId },
        });
        res.json({ message: 'Materiel deleted successfully' });
    } catch (error) {
        console.error('Error deleting materiel:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
