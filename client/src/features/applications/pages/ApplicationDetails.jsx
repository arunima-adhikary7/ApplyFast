import { useParams } from "react-router-dom";

const ApplicationDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h1 className="text-3xl font-bold">
                Application Details
            </h1>

            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <p>
                    Application ID:{" "}
                    <strong>{id}</strong>
                </p>

                <div className="mt-6 space-y-3">
                    <p>
                        <strong>Company:</strong> Google
                    </p>

                    <p>
                        <strong>Position:</strong>{" "}
                        Software Engineer Intern
                    </p>

                    <p>
                        <strong>Status:</strong> Applied
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ApplicationDetails;