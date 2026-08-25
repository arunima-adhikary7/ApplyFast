import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../features/auth/pages/Login";
import Signup from "../features/auth/pages/Signup";
import ForgotPassword from "../features/auth/pages/ForgotPassword";

import Dashboard from "../features/dashboard/pages/Dashboard";
import Profile from "../features/profile/pages/Profile";
import Resume from "../features/resume/pages/Resume";

import Applications from "../features/applications/pages/Applications";
import ApplicationDetails from "../features/applications/pages/ApplicationDetails";

import JobAnalysis from "../features/jobs/pages/JobAnalysis";
import JobHistory from "../features/jobs/pages/JobHistory";

import AIAnswer from "../features/ai/pages/AIAnswer";
import CoverLetter from "../features/ai/pages/CoverLetter";

import Settings from "../features/settings/pages/Settings";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Public */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
                path="/forgot-password"
                element={<ForgotPassword />}
            />

            {/* Dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Profile */}
            <Route path="/profile" element={<Profile />} />

            {/* Resume */}
            <Route path="/resume" element={<Resume />} />

            {/* Applications */}
            <Route
                path="/applications"
                element={<Applications />}
            />

            <Route
                path="/applications/:id"
                element={<ApplicationDetails />}
            />

            {/* Jobs */}
            <Route
                path="/jobs/analyze"
                element={<JobAnalysis />}
            />

            <Route
                path="/jobs/history"
                element={<JobHistory />}
            />

            {/* AI */}
            <Route
                path="/ai/answer"
                element={<AIAnswer />}
            />

            <Route
                path="/ai/cover-letter"
                element={<CoverLetter />}
            />

            {/* Settings */}
            <Route
                path="/settings"
                element={<Settings />}
            />

            {/* Default */}
            <Route
                path="/"
                element={<Navigate to="/login" replace />}
            />

            {/* 404 */}
            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />
        </Routes>
    );
};

export default AppRoutes;