import { Link } from "react-router-dom";

const Applications = () => {
    const applications = [
        {
            id: 1,
            company: "Google",
            position: "Software Engineer Intern",
            status: "Applied",
        },
        {
            id: 2,
            company: "Microsoft",
            position: "SDE Intern",
            status: "Assessment",
        },
        {
            id: 3,
            company: "Amazon",
            position: "Software Development Engineer",
            status: "Interview",
        },
    ];

    return (
        <div>
            <div className="mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Applications
                    </h1>

                    <p className="mt-2 text-gray-500">
                        Track all your job applications.
                    </p>
                </div>

                <Link
                    to="/applications/new"
                    className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white"
                >
                    Add Application
                </Link>
            </div>

            <div className="overflow-hidden rounded-xl bg-white shadow-sm">
                <table className="w-full">
                    <thead className="border-b bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left">
                                Company
                            </th>

                            <th className="px-6 py-4 text-left">
                                Position
                            </th>

                            <th className="px-6 py-4 text-left">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map((application) => (
                            <tr
                                key={application.id}
                                className="border-b last:border-0"
                            >
                                <td className="px-6 py-4 font-medium">
                                    {application.company}
                                </td>

                                <td className="px-6 py-4">
                                    {application.position}
                                </td>

                                <td className="px-6 py-4">
                                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
                                        {application.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Applications;