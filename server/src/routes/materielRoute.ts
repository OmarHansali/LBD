import express from 'express';
import { createMateriel, getMateriels, getMaterielById, updateMateriel, deleteMateriel } from '../controllers/materielController';

const router = express.Router();

// Create Materiel
router.post('/', createMateriel);

// Read Materiels
router.get('/', getMateriels);

// Read Materiel by ID
router.get('/:id', getMaterielById);

// Update Materiel
router.put('/:id', updateMateriel);

// Delete Materiel
router.delete('/:id', deleteMateriel);

export default router;
