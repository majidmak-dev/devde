import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const app = express();
const prisma = new PrismaClient({ adapter });
const PORT = process.env.PORT || 5001;

import authRoutes from './routes/auth.routes';
import imageRoutes from './routes/image.routes';
import aiRoutes from './routes/ai.routes';
import contactRoutes from './routes/contact.routes';

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/contact', contactRoutes); // Added contact routes

app.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'DevDesigns API is running' });
});

// Only listen locally — Vercel handles the HTTP server in production
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export { prisma };
export default app;
