import { useState } from "react";
import { SuccessModal } from "./SuccessModal";
import { FailureModal } from "./FailureModal";

export default function ContactForm(isSuccess, setIsSuccess) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [success, setSuccess] = useState(false);
    const [isModalVisibleSuccess, setModalVisibleSuccess] = useState(false);
    const [isModalVisibleFail, setModalVisibleFail] = useState(false);

    const handleFormSumbit = (e) => {
        e.preventDefault();
        console.log("Form Submited");
        if (success) setModalVisibleSuccess(true);
        if (!success) setModalVisibleFail(true);
    };

    const onClose = () => {
        setModalVisibleSuccess(false);
        setModalVisibleFail(false);
        if (success) {
            setName("");
            setEmail("");
            setPhone("");
            setSubject("");
            setMessage("");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-6">
            <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 space-y-6">
                <h2 className="text-3xl font-bold text-gray-800 text-center">
                    Contact Us
                </h2>
                <form className="space-y-6" onSubmit={handleFormSumbit}>
                    {/* Name */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Phone Number
                        </label>
                        <input
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            placeholder="+91 9876543210"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />
                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Subject
                        </label>
                        <input
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            type="text"
                            placeholder="Inquiry about services"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-1 font-semibold text-gray-700">
                            Message
                        </label>
                        <textarea
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="5"
                            placeholder="Your message..."
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-400 outline-none transition resize-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <SuccessModal
                isModalVisible={isModalVisibleSuccess}
                onClose={onClose}
            />
            <FailureModal
                isModalVisible={isModalVisibleFail}
                onClose={onClose}
            />
        </div>
    );
}
