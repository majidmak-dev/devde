"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = exports.authMiddleware = void 0;
const auth_1 = require("../utils/auth");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
        return res.status(401).json({ error: 'No token provided' });
    const decoded = (0, auth_1.verifyToken)(token);
    if (!decoded)
        return res.status(401).json({ error: 'Invalid token' });
    req.user = decoded;
    next();
};
exports.authMiddleware = authMiddleware;
const adminMiddleware = (req, res, next) => {
    if (req.user?.role !== 'ADMIN') {
        return res.status(403).json({ error: 'Admin access required' });
    }
    next();
};
exports.adminMiddleware = adminMiddleware;
