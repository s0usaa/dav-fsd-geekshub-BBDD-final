const userControllers = require('../controllers/userControllers');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/profile', verifyToken, userControllers.profile);
router.put('/profile', verifyToken, userControllers.updateProfile);

module.exports = router;