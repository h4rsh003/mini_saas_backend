const express = require('express');
const router = express.Router();
const { getUserProfile, mockCheckout } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

router.get('/profile', protect, getUserProfile);
router.post('/checkout', protect, mockCheckout);

module.exports = router;