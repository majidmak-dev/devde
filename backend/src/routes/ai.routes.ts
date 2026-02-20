import { Router } from 'express';
import { getDomainSuggestions, handleChat, blogAssist, generateDetail } from '../controllers/ai.controller';

const router = Router();

router.get('/domains', getDomainSuggestions);
router.post('/chat', handleChat);
router.post('/blog-assist', blogAssist);
router.post('/detail', generateDetail);

export default router;
