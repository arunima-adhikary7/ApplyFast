import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "../../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();

    const {
        login,
        loading: authLoading,
    } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const result = await login(formData);

            if (result.success) {
                navigate("/dashboard", {
                    replace: true,
                });
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Optional: prevent showing login form while
    // AuthContext is checking an existing token.
    if (authLoading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <p className="text-gray-500">
                    Checking authentication...
                </p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        ApplyFast
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Sign in to your account
                    </p>
                </div>

                {/* Login Form */}
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="mb-2 block text-sm font-medium"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            autoComplete="email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label
                            htmlFor="password"
                            className="mb-2 block text-sm font-medium"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            autoComplete="current-password"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting
                            ? "Logging in..."
                            : "Login"}
                    </button>
                </form>

                {/* Signup */}
                <p className="mt-6 text-center text-sm text-gray-500">
                    Don't have an account?{" "}

                    <Link
                        to="/signup"
                        className="font-semibold text-blue-600 hover:underline"
                    >
                        Create one
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;