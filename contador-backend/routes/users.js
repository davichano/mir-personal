const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const UserController = require('../controllers/UserController');
const upload = require("../middlewares/upload");

// Rutas protegidas
router.get('/profile', authenticateToken, UserController.getProfile);
router.put('/:id', authenticateToken, upload.single('logo'), UserController.updateUserWithFile);
router.delete('/:id', authenticateToken, UserController.deleteUser);

// Rutas públicas
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

module.exports = router;
