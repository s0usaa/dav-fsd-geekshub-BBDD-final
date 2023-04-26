const adminControllers = require('../controllers/adminControllers');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require ('../middleware/isAdmin');

router.get('/users', verifyToken, isAdmin, adminControllers.getAllUsers);
router.get('/users/:id', verifyToken, isAdmin, adminControllers.getUserById);

module.exports = router;