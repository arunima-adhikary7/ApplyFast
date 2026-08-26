import {
    useEffect,
    useState,
} from "react";

import AuthContext from "./AuthContext";

import {
    loginUser,
    registerUser,
    getCurrentUser,
    updateCurrentUser,
} from "../features/auth/authService";

import {
    showSuccess,
    showError,
} from "../utils/toast";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /*
     * Restore authentication when application starts
     */
    useEffect(() => {
        let cancelled = false;

        const restoreAuth = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                if (!cancelled) {
                    setLoading(false);
                }

                return;
            }

            try {
                const response = await getCurrentUser();

                if (cancelled) return;

                const currentUser = response.data.user;

                setUser(currentUser);

                localStorage.setItem(
                    "user",
                    JSON.stringify(currentUser)
                );
            } catch (error) {
                if (cancelled) return;

                console.error(
                    "Failed to restore authentication:",
                    error
                );

                localStorage.removeItem("token");
                localStorage.removeItem("user");

                setUser(null);
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        restoreAuth();

        return () => {
            cancelled = true;
        };
    }, []);

    /*
     * LOGIN
     */
    const login = async (credentials) => {
        try {
            const response = await loginUser(credentials);

            const {
                token,
                user: loggedInUser,
            } = response.data;

            localStorage.setItem(
                "token",
                token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(loggedInUser)
            );

            setUser(loggedInUser);

            showSuccess("Login successful!");

            return {
                success: true,
                user: loggedInUser,
            };
        } catch (error) {
            const message =
                error.response?.data?.message ||
                "Login failed. Please try again.";

            showError(message);

            return {
                success: false,
                message,
            };
        }
    };

    /*
     * REGISTER
     */
    const register = async (userData) => {
        try {
            const response =
                await registerUser(userData);

            const {
                token,
                user: registeredUser,
            } = response.data;

            if (token && registeredUser) {
                localStorage.setItem(
                    "token",
                    token
                );

                localStorage.setItem(
                    "user",
                    JSON.stringify(registeredUser)
                );

                setUser(registeredUser);
            }

            showSuccess(
                "Account created successfully!"
            );

            return {
                success: true,
                user: registeredUser || null,
            };
        } catch (error) {
            const message =
                error.response?.data?.message ||
                "Registration failed. Please try again.";

            showError(message);

            return {
                success: false,
                message,
            };
        }
    };

    /*
     * UPDATE USER
     */
    const updateUser = async (userData) => {
        try {
            const response =
                await updateCurrentUser(userData);

            const updatedUser =
                response.data.user;

            setUser(updatedUser);

            localStorage.setItem(
                "user",
                JSON.stringify(updatedUser)
            );

            showSuccess(
                "Profile updated successfully!"
            );

            return {
                success: true,
                user: updatedUser,
            };
        } catch (error) {
            const message =
                error.response?.data?.message ||
                "Failed to update profile.";

            showError(message);

            return {
                success: false,
                message,
            };
        }
    };

    /*
     * LOGOUT
     */
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);

        showSuccess(
            "Logged out successfully!"
        );
    };

    const value = {
        user,
        loading,
        isAuthenticated: Boolean(user),
        login,
        register,
        updateUser,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;