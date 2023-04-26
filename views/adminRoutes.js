const adminControllers = require('../controllers/adminControllers');
const router = require('express').Router();
const verifyToken = require('../middleware/verifyToken');
const isAdmin = require ('../middleware/isAdmin');



module.exports = router;