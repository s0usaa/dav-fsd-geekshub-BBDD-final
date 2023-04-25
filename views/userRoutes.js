const userControllers = require('../controllers/userControllers');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');

router.get('/profile', verifyToken, userControllers.profile);
router.put('/profile', verifyToken, userControllers.updateProfile);
router.post('/match', verifyToken, userControllers.newMatch);
router.put('/match', verifyToken, userControllers.updateMatch);
router.delete('/match/:id', verifyToken, userControllers.deleteMatch);

module.exports = router;