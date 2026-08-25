const Resume = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">
                Resume
            </h1>

            <p className="mt-2 text-gray-500">
                Upload and manage your resume.
            </p>

            <div className="mt-8 rounded-xl border-2 border-dashed border-gray-300 bg-white p-12 text-center">
                <h2 className="text-xl font-semibold">
                    Upload your resume
                </h2>

                <p className="mt-2 text-gray-500">
                    PDF, DOC or DOCX
                </p>

                <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="mt-6"
                />
            </div>
        </div>
    );
};

export default Resume;