const router = require('express').Router();
const user = require('../controllers/userController');
// const authMiddleware = require('../middlewares/authMiddleware');

// User Routes
router.get('/profile', /*authMiddleware,*/ user.profile);
router.post('/sendOTP', user.sendOTP);
router.post('/verifyOTP', user.verifyOTP);

module.exports = router;