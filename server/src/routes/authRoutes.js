const express = require("express");

const {
    register,
    login,
    getMe,
    updateMe,
} = require("../controllers/authController");

const {
    validateRegister,
    validateLogin,
} = require("../validators/authValidator");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Public routes
router.post("/register", validateRegister, register);
router.post("/login", validateLogin, login);

// Protected routes
router.get("/me", authMiddleware, getMe);
router.put("/me", authMiddleware, updateMe);

module.exports = router;