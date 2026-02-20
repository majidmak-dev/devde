"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const image_controller_1 = require("../controllers/image.controller");
const router = (0, express_1.Router)();
router.get('/search', image_controller_1.searchImages);
router.get('/videos/search', image_controller_1.searchVideos);
exports.default = router;
