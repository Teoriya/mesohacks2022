const router = require('express').Router();
const { messageListener, verification } = require('../controllers/whatsappController');

// User Routes
router.get('/', verification);
router.post('/', messageListener);

module.exports = router;