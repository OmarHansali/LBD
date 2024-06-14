import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create Contact
export const createContact = async (req: Request, res: Response) => {
  try {
    const { name, email, object, body, seen } = req.body;

    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        object,
        body,
        seen: seen === "true" ? true : false,
      },
    });

    // Send the response
    res.status(201).json(newContact);
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Read Contacts
export const getContacts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contacts = await prisma.contact.findMany();
    res.json(contacts);
  } catch (error) {
    console.error("Error getting contacts:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Read Contact by ID
export const getContactById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contactId = parseInt(req.params.id);
    const contact = await prisma.contact.findUnique({
      where: { id: contactId },
    });
    if (!contact) {
      res.status(404).json({ error: "Contact not found" });
      return;
    }
    res.json(contact);
  } catch (error) {
    console.error("Error getting contact by ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update Contact
export const updateContact = async (req: Request, res: Response) => {
  try {
    const contactId = parseInt(req.params.id);
    const { name, email, object, body, seen } = req.body;

    const updatedContact = await prisma.contact.update({
      where: { id: contactId },
      data: {
        name,
        email,
        object,
        body,
        seen: seen === "true" ? true : false,
      },
    });

    res.json(updatedContact);
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete Contact
export const deleteContact = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const contactId = parseInt(req.params.id);
    await prisma.contact.delete({
      where: { id: contactId },
    });
    res.json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateSeenProperty = async (req: Request, res: Response): Promise<void> => {
  try {


    const updatedContacts = await prisma.contact.updateMany({
      data: {
        seen: true
      }
    });
    res.json(updatedContacts);
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({ error: "Internal server error" });
  }
} 