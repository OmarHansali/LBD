import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import { sendEmail } from '../service/sendEmail';

const prisma = new PrismaClient();

// Generate random password
const generateRandomPassword = () => {
    return crypto.randomBytes(3).toString('hex');
};

export const sendVerificationEmail = async (email, username, password): Promise<void> => {

    try {
        await sendEmail(email , username, password);
    } catch (error) {
        console.error('Error sending verification email:', error);
    }
};

// Create User
export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email, phoneNumber, role, CEN, profile } = req.body;

        // Check if the username or email already exists
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    { username },
                ],
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        const password = generateRandomPassword();
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await prisma.user.create({
          data: {
            username,
            password: hashedPassword,
            email,
            phoneNumber,
            role,
            CEN,
            profile,
          },
        });

        sendVerificationEmail(email, username, password);
        // Send the response
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read Users
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        console.error('Error getting users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Read User by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.id);
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error) {
        console.error('Error getting user by ID:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update User
export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.id);
        const { username,password, email, phoneNumber, role, CEN, profile } = req.body;

        const updatedUser = await prisma.user.update({
          where: { id: userId },
          data: {
            username,
            password, // You may want to hash the updated password again if it's provided
            email,
            phoneNumber,
            role,
            CEN,
            profile,
          },
        });

        res.json(updatedUser);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete User
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = parseInt(req.params.id);
        await prisma.user.delete({
            where: { id: userId },
        });
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
