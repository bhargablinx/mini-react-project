import React from "react";

const HomePage = () => {
    return (
        <main className="text-gray-800">
            {/* Hero Section */}
            <section className="bg-indigo-50 py-20 px-6 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Secure & Private VPN Access
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                    Protect your internet connection and surf the web safely
                    with our fast and reliable VPN services.
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg hover:bg-indigo-700 transition">
                    Get Started
                </button>
            </section>

            {/* Features Section */}
            <section className="py-16 px-6 bg-white">
                <h2 className="text-3xl font-semibold text-center mb-10">
                    Why Choose Us?
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            High-Speed Servers
                        </h3>
                        <p>
                            Connect to servers worldwide with lightning-fast
                            speeds.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            No Logs Policy
                        </h3>
                        <p>
                            We respect your privacy. We don’t track or store
                            your activity.
                        </p>
                    </div>
                    <div className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            One Click Connect
                        </h3>
                        <p>Use our app to connect securely in just one tap.</p>
                    </div>
                </div>
            </section>

            {/* Pricing Preview */}
            <section className="py-16 px-6 bg-gray-50 text-center">
                <h2 className="text-3xl font-semibold mb-6">
                    Plans for Everyone
                </h2>
                <p className="mb-4">Flexible pricing to suit your needs.</p>
                <div className="flex flex-col md:flex-row gap-6 justify-center mt-6">
                    <div className="bg-white p-6 rounded-lg shadow-md w-72">
                        <h3 className="text-xl font-semibold mb-2">Basic</h3>
                        <p className="text-gray-600 mb-4">$5/month</p>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                            Choose Plan
                        </button>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md w-72">
                        <h3 className="text-xl font-semibold mb-2">Premium</h3>
                        <p className="text-gray-600 mb-4">$10/month</p>
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                            Choose Plan
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
