import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { prisma } from '../index';
import { generateToken } from '../utils/auth';

export const signup = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) return res.status(400).json({ error: 'User already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await prisma.user.create({
            data: { email, password: hashedPassword, name }
        });

        const token = generateToken(user.id, user.role);
        res.status(21).json({ user: { id: user.id, email: user.id, name: user.name, role: user.role }, token });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = generateToken(user.id, user.role);
        res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role }, token });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
