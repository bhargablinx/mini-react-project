import { useState } from "react";

export default function ItemList({ id, title }) {
    const [isCompleted, setIsComplete] = useState(false);

    const handleCheckBox = () => {
        setIsComplete((prev) => !prev);
    };

    return (
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
                <input
                    type="checkbox"
                    id={id}
                    onChange={handleCheckBox}
                    className="accent-gray-700"
                />

                <label
                    htmlFor={id}
                    className={`text-sm text-gray-800 border-b border-gray-200 pb-1 select-none ${
                        isCompleted ? "line-through" : ""
                    }`}
                >
                    {title}
                </label>
            </div>
            <button className="text-[12px] text-gray-700 px-1 rounded cursor-pointer hover:text-red-500">
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}
