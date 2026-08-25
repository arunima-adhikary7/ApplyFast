import { useState } from "react";

const AIAnswer = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const generateAnswer = () => {
        setAnswer(
            "Your AI-generated answer will appear here."
        );
    };

    return (
        <div>
            <h1 className="text-3xl font-bold">
                AI Application Answer
            </h1>

            <p className="mt-2 text-gray-500">
                Generate personalized answers for application questions.
            </p>

            <div className="mt-8 space-y-6">
                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <label className="font-semibold">
                        Application Question
                    </label>

                    <textarea
                        value={question}
                        onChange={(e) =>
                            setQuestion(e.target.value)
                        }
                        placeholder="Why do you want to join our company?"
                        rows={5}
                        className="mt-3 w-full rounded-lg border p-4"
                    />

                    <button
                        onClick={generateAnswer}
                        className="mt-4 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white"
                    >
                        Generate Answer
                    </button>
                </div>

                <div className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="font-semibold">
                        Generated Answer
                    </h2>

                    <p className="mt-4 whitespace-pre-wrap text-gray-700">
                        {answer || "No answer generated yet."}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIAnswer;