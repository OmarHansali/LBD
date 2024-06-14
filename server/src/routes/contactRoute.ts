import express from "express";
import {
  createContact,
  getContacts,
  getContactById,
  updateContact,
  deleteContact,
} from "../controllers/contactController";

const router = express.Router();

// Create Contact
router.post("/", createContact);

// Read Contacts
router.get("/", getContacts);

// Read Contact by ID
router.get("/:id", getContactById);

// Update Contact
router.put("/:id", updateContact);

// Delete Contact
router.delete("/:id", deleteContact);

export default router;
