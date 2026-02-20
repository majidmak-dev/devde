import { PrismaClient } from '@prisma/client';
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
});
const PORT = process.env.PORT || 5001;

import authRoutes from './routes/auth.routes';
import imageRoutes from './routes/image.routes';
import aiRoutes from './routes/ai.routes';
import contactRoutes from './routes/contact.routes'; // Added contact routes import

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/contact', contactRoutes); // Added contact routes

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'DevDesigns API is running' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export { app, prisma };
