"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.signup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const index_1 = require("../index");
const auth_1 = require("../utils/auth");
const signup = async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const existingUser = await index_1.prisma.user.findUnique({ where: { email } });
        if (existingUser)
            return res.status(400).json({ error: 'User already exists' });
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        const user = await index_1.prisma.user.create({
            data: { email, password: hashedPassword, name }
        });
        const token = (0, auth_1.generateToken)(user.id, user.role);
        res.status(21).json({ user: { id: user.id, email: user.id, name: user.name, role: user.role }, token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.signup = signup;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await index_1.prisma.user.findUnique({ where: { email } });
        if (!user)
            return res.status(404).json({ error: 'User not found' });
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ error: 'Invalid credentials' });
        const token = (0, auth_1.generateToken)(user.id, user.role);
        res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role }, token });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.login = login;
