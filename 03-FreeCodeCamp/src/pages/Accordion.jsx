import { useState } from "react";

function AccordionCard({ question, answer }) {
    const [isHidden, setIsHidden] = useState(true);

    const toggleAccordion = () => {
        setIsHidden((prev) => !prev);
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 transition hover:shadow-lg">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg font-semibold text-gray-800">
                    {question}
                </h2>
                <span
                    className={`text-gray-400 transform transition-transform duration-300 ${
                        isHidden ? "" : "rotate-180"
                    }`}
                >
                    &#9660;
                </span>
            </div>

            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isHidden ? "max-h-0" : "max-h-40"
                }`}
            >
                <p className="text-gray-600 mt-2">{answer}</p>
            </div>
        </div>
    );
}

export default function Accordion() {
    const data = [
        {
            id: crypto.randomUUID(),
            question: "What is React?",
            answer: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components.",
        },
        {
            id: crypto.randomUUID(),
            question: "How does Tailwind CSS work?",
            answer: "Tailwind is a utility-first CSS framework that gives you low-level utility classes to build custom designs directly in your HTML.",
        },
        {
            id: crypto.randomUUID(),
            question: "Is Tailwind good for React?",
            answer: "Yes, Tailwind and React work very well together. Tailwind simplifies styling while React handles logic and interactivity.",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-6 flex items-center justify-center">
            <div className="max-w-2xl w-full space-y-6">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
                    Frequently Asked Questions
                </h1>

                {/* Accordion Card */}
                {data.map((item) => {
                    return (
                        <AccordionCard
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                        />
                    );
                })}
            </div>
        </div>
    );
}
