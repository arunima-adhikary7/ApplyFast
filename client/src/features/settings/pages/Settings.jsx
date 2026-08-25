const Settings = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold">
                Settings
            </h1>

            <p className="mt-2 text-gray-500">
                Manage your ApplyFast account.
            </p>

            <div className="mt-8 space-y-6">
                <section className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Account
                    </h2>

                    <div className="mt-5 space-y-4">
                        <input
                            placeholder="Name"
                            className="w-full rounded-lg border px-4 py-3"
                        />

                        <input
                            placeholder="Email"
                            type="email"
                            className="w-full rounded-lg border px-4 py-3"
                        />
                    </div>
                </section>

                <section className="rounded-xl bg-white p-6 shadow-sm">
                    <h2 className="text-xl font-semibold">
                        Security
                    </h2>

                    <button className="mt-5 rounded-lg bg-gray-900 px-5 py-3 text-white">
                        Change Password
                    </button>
                </section>
            </div>
        </div>
    );
};

export default Settings;