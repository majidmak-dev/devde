"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
// Load .env from frontend
dotenv_1.default.config({ path: path_1.default.join(__dirname, '../../frontend/.env.local') });
async function testSMTP() {
    console.log('Testing SMTP with:');
    console.log('Host:', process.env.SMTP_HOST);
    console.log('Port:', process.env.SMTP_PORT);
    console.log('Secure:', process.env.SMTP_SECURE);
    console.log('User:', process.env.SMTP_USER);
    // Some systems parse quotes literally if present in .env
    const pass = process.env.SMTP_PASS?.replace(/^"(.*)"$/, '$1');
    const transporter = nodemailer_1.default.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        },
        tls: { rejectUnauthorized: false }
    });
    try {
        await transporter.verify();
        console.log('SMTP Connection successful!');
    }
    catch (error) {
        console.error('SMTP Connection failed:', error);
    }
}
testSMTP();
