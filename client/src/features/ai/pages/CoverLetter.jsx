import { useState } from "react";

const CoverLetter = () => {
    const [jobDescription, setJobDescription] = useState("");
    const [coverLetter, setCoverLetter] = useState("");

    const generateCoverLetter = () => {
        setCoverLetter(
            "Your AI-generated cover letter will appear here."
        );
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Cover Letter Generator
            </h1>

            <p className="mt-2 text-gray-500">
                Generate a personalized cover letter using AI.
            </p>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <textarea
                    value={jobDescription}
                    onChange={(e) =>
                        setJobDescription(e.target.value)
                    }
                    placeholder="Paste job description..."
                    rows={10}
                    className="w-full rounded-lg border p-4"
                />

                <button
                    onClick={generateCoverLetter}
                    className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
                >
                    Generate Cover Letter
                </button>

                <div className="mt-8 border-t pt-6">
                    <h2 className="font-semibold">
                        Generated Cover Letter
                    </h2>

                    <p className="mt-4 whitespace-pre-wrap text-gray-700">
                        {coverLetter || "Nothing generated yet."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CoverLetter;