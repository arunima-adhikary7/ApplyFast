const Dashboard = () => {
    const stats = [
        {
            title: "Total Applications",
            value: 42,
        },
        {
            title: "Applied",
            value: 31,
        },
        {
            title: "Assessment",
            value: 6,
        },
        {
            title: "Interviews",
            value: 3,
        },
        {
            title: "Rejected",
            value: 8,
        },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Dashboard
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage your job applications from one place.
                </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="rounded-xl bg-white p-5 shadow-sm"
                    >
                        <p className="text-sm text-gray-500">
                            {stat.title}
                        </p>

                        <p className="mt-2 text-3xl font-bold">
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">
                    Recent Applications
                </h2>

                <p className="mt-4 text-gray-500">
                    Your recent applications will appear here.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;