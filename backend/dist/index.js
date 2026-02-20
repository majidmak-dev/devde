"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = exports.app = void 0;
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
exports.app = app;
const prisma = new client_1.PrismaClient({
    accelerateUrl: process.env.DATABASE_URL,
});
exports.prisma = prisma;
const PORT = process.env.PORT || 5001;
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const image_routes_1 = __importDefault(require("./routes/image.routes"));
const ai_routes_1 = __importDefault(require("./routes/ai.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/auth', auth_routes_1.default);
app.use('/api/images', image_routes_1.default);
app.use('/api/ai', ai_routes_1.default);
app.use('/api/contact', contact_routes_1.default); // Added contact routes
app.get('/health', (req, res) => {
    res.json({ status: 'DevDesigns API is running' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
