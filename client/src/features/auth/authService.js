import api from "../../services/api";

// Register
export const registerUser = async (userData) => {
    const response = await api.post("/auth/register", userData);

    return response.data;
};

// Login
export const loginUser = async (credentials) => {
    const response = await api.post("/auth/login", credentials);

    return response.data;
};

// Get current logged-in user
export const getCurrentUser = async () => {
    const response = await api.get("/auth/me");

    return response.data;
};

// Update current user
export const updateCurrentUser = async (userData) => {
    const response = await api.put("/auth/me", userData);

    return response.data;
};