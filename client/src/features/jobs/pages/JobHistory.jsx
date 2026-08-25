const JobHistory = () => {
    const jobs = [
        {
            company: "Google",
            role: "Software Engineer",
            score: 82,
        },
        {
            company: "Microsoft",
            role: "ML Engineer",
            score: 76,
        },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Job Analysis History
            </h1>

            <div className="mt-8 space-y-4">
                {jobs.map((job) => (
                    <div
                        key={`${job.company}-${job.role}`}
                        className="rounded-xl bg-white p-6 shadow-sm"
                    >
                        <div className="flex justify-between">
                            <div>
                                <h2 className="font-semibold">
                                    {job.role}
                                </h2>

                                <p className="text-gray-500">
                                    {job.company}
                                </p>
                            </div>

                            <span className="font-bold">
                                {job.score}%
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobHistory;