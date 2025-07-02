import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../slices/authSlice";

const Dashboard = () => {
    const [isConnected, setIsConnected] = useState(false);
    const [selectedServer, setSelectedServer] = useState("USA");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toggleConnection = () => {
        setIsConnected(!isConnected);
    };

    const handleLogout = () => {
        console.log("Logged out");
        // Redirect or clear auth state here
        dispatch(logout());
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Header */}
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-semibold text-gray-800">
                    Dashboard
                </h1>
                <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                    Logout
                </button>
            </header>

            {/* Welcome Card */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h2 className="text-xl font-bold mb-2">Welcome back, User!</h2>
                <p className="text-gray-600">
                    Your connection is {isConnected ? "secured" : "not secured"}
                    .
                </p>
            </div>

            {/* VPN Control Panel */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* VPN Status */}
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-lg font-semibold mb-4">VPN Status</h3>
                    <p
                        className={`text-lg font-bold mb-4 ${
                            isConnected ? "text-green-600" : "text-red-500"
                        }`}
                    >
                        {isConnected ? "Connected" : "Disconnected"}
                    </p>
                    <button
                        onClick={toggleConnection}
                        className={`px-4 py-2 rounded-md text-white ${
                            isConnected
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-green-500 hover:bg-green-600"
                        }`}
                    >
                        {isConnected ? "Disconnect" : "Connect"}
                    </button>
                </div>

                {/* Server Selector */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold mb-4">
                        Choose Server Location
                    </h3>
                    <select
                        value={selectedServer}
                        onChange={(e) => setSelectedServer(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    >
                        <option>USA</option>
                        <option>UK</option>
                        <option>Germany</option>
                        <option>India</option>
                        <option>Singapore</option>
                    </select>
                    <p className="mt-4 text-sm text-gray-500">
                        Current Server: {selectedServer}
                    </p>
                </div>
            </div>

            {/* Usage Stats */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4">Usage Stats</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li>Session Duration: 45 min</li>
                    <li>Data Used: 800MB</li>
                    <li>Last Login: July 2, 2025 - 10:30 AM</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
