export function FailureModal({ onClose, isModalVisible }) {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm ${
                isModalVisible ? "" : "hidden"
            }`}
        >
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full space-y-4 text-center">
                <div className="flex justify-center items-center w-16 h-16 bg-red-100 rounded-full mx-auto">
                    <svg
                        className="w-8 h-8 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-800">Oops!</h2>
                <p className="text-gray-600">
                    Something went wrong. Please try again later.
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full font-medium transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
