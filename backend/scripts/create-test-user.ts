import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
});

async function main() {
    const email = 'client@devdesigns.com';
    const password = 'Password123!';

    const existingUser = await prisma.user.findUnique({
        where: { email }
    });

    if (existingUser) {
        console.log('User already exists:', email);
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name: 'Elite Client',
            role: 'CLIENT'
        }
    });

    console.log('User created successfully:', email);
    console.log('Password: ', password);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
