import { Link } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Password reset requested:", email);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-2xl font-bold">
                    Forgot Password?
                </h1>

                <p className="mt-2 text-gray-500">
                    Enter your email and we'll send you a reset link.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-5"
                >
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                        required
                    />

                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white"
                    >
                        Send Reset Link
                    </button>
                </form>

                <Link
                    to="/login"
                    className="mt-6 block text-center text-sm text-blue-600"
                >
                    Back to Login
                </Link>
            </div>
        </div>
    );
};

export default ForgotPassword;