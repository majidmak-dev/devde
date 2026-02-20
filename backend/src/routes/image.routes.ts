import { Router } from 'express';
import { searchImages, searchVideos } from '../controllers/image.controller';

const router = Router();

router.get('/search', searchImages);
router.get('/videos/search', searchVideos);

export default router;
