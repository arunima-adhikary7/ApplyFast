const authService = require("../services/authService");
const generateToken = require("../utils/generateToken");

const register = async (req, res, next) => {
    try {
        const user = await authService.registerUser(req.body);

        res.status(201).json({
            success: true,
            message: "User registered successfully",
            data: {
                user,
            },
        });
    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {
        const user = await authService.loginUser(req.body);

        const token = generateToken(user.id);

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                user,
                token,
            },
        });
    } catch (error) {
        next(error);
    }
};

const getMe = async (req, res, next) => {
    try {
        const user = await authService.getUserById(req.user.id);

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: {
                user,
            },
        });
    } catch (error) {
        next(error);
    }
};

const updateMe = async (req, res, next) => {
    try {
        const user = await authService.updateUser(
            req.user.id,
            req.body
        );

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: {
                user,
            },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    getMe,
    updateMe,
};