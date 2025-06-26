import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
    const [count, setCount] = useState(0);
    const [stepper, setStepper] = useState(1);
    const [isAppActive, setIsAppActive] = useState(false);

    const handleIncrease = () => {
        setCount((prev) => prev + stepper);
    };

    const handleDecrease = () => {
        setCount((prev) => prev - stepper);
    };

    return (
        <>
            <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Mini Toolkit
                </h1>

                <div className="text-lg text-center">
                    <span className="font-medium">Count:</span> {count}
                </div>

                <div className="flex justify-center gap-4">
                    <button
                        onClick={() =>
                            isAppActive
                                ? handleIncrease()
                                : alert("App is not active")
                        }
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            isAppActive
                                ? handleDecrease()
                                : alert("App is not active")
                        }
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    >
                        −
                    </button>
                </div>

                <div className="text-center">
                    <input
                        type="number"
                        value={stepper}
                        onChange={(e) =>
                            isAppActive && setStepper(Number(e.target.value))
                        }
                        placeholder="Stepper Value (default 1)"
                        className="mt-4 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <p className="mt-1 text-sm text-gray-500">
                        Default value is <span className="font-medium">1</span>
                    </p>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => {
                            setIsAppActive((prev) => !prev);
                        }}
                        className={`mt-4 w-full py-2 px-4 rounded-md font-semibold text-white ${
                            isAppActive
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-green-500 hover:bg-green-600"
                        }`}
                    >
                        {isAppActive ? "Stop App" : "Start App"}
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
