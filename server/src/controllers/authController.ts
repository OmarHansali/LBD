import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
        // Find user by email
        const user = await prisma.user.findFirst({
            where: { username }
        });

        console.log(password);
        
        

        if (!user) {
            res.status(401).send('Invalid user');
            return;
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            res.status(401).send('Invalid username or password');
            return;
        }

        // Create JWT token
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
            expiresIn: '24h' 
        });

        const response = {
            token,
            user: {
                id: user.id,
                username: user.username,
                password: user.password,
                role: user.role,
                email: user.email,
                phoneNumber: user.phoneNumber,
                CEN: user.CEN,
                profile: user.profile,
            }
        };

        res.send(response);
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};
