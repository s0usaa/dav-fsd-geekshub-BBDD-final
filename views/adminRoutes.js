const adminControllers = require('../controllers/adminControllers');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require ('../middleware/isAdmin');

router.get('/users', verifyToken, isAdmin, adminControllers.getAllUsers);
router.get('/users/:id', verifyToken, isAdmin, adminControllers.getUserById);
router.post('/tracks', verifyToken, isAdmin, adminControllers.createTracks);
router.delete('/tracks/:id', verifyToken, isAdmin, adminControllers.deleteTracks);
router.put('/tracks', verifyToken, isAdmin, adminControllers.updateTracks);
router.get('/tracks', verifyToken, isAdmin, adminControllers.getTracks);
router.get('/coaches', verifyToken, isAdmin, adminControllers.getCoaches);
router.post('/coaches', verifyToken, isAdmin, adminControllers.createCoaches);

module.exports = router;