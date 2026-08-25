const Profile = () => {
    return (
        <div>
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    My Profile
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage your professional information.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Personal Information
                    </h2>

                    <div className="mt-5 space-y-4">
                        <input
                            placeholder="Full Name"
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <input
                            placeholder="Email"
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <input
                            placeholder="Phone"
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <textarea
                            placeholder="Address"
                            className="w-full rounded-lg border px-4 py-3"
                        />
                    </div>
                </section>

                <section className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Professional Information
                    </h2>

                    <div className="mt-5 space-y-4">
                        <input
                            placeholder="College / University"
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <input
                            placeholder="Degree"
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <input
                            placeholder="CGPA"
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <input
                            placeholder="Skills"
                            className="w-full rounded-lg border px-4 py-3"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Profile;