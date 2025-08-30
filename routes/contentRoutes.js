const express = require('express');
const router = express.Router();
const {filterContent} = require('../controllers/contentController');
const {protect} = require('../middlewares/authMiddleware');

router.get('/content', protect, filterContent);

module.exports = router;