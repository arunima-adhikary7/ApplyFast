import { useState } from "react";

const JobAnalysis = () => {
    const [jobDescription, setJobDescription] = useState("");

    const handleAnalyze = () => {
        console.log("Analyze:", jobDescription);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Job Analysis
            </h1>

            <p className="mt-2 text-gray-500">
                Analyze a job description against your profile.
            </p>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <textarea
                    value={jobDescription}
                    onChange={(e) =>
                        setJobDescription(e.target.value)
                    }
                    placeholder="Paste the job description here..."
                    rows={12}
                    className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-500"
                />

                <button
                    onClick={handleAnalyze}
                    className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
                >
                    Analyze Job
                </button>
            </div>
        </div>
    );
};

export default JobAnalysis;