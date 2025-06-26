import { useState } from "react";

export default function ItemList({
    id,
    title,
    tasks,
    setTasks,
    completedTask,
    setCompletedTask,
}) {
    const [isCompleted, setIsComplete] = useState(false);

    const handleCheckBox = (e) => {
        setIsComplete((prev) => !prev);
        if (e.target.checked) {
            setCompletedTask([title, ...completedTask]);
        }
    };

    const handleDelete = () => {
        const newTasks = tasks.filter((item) => id !== item.id);
        setTasks(newTasks);
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
            <button
                onClick={handleDelete}
                className="text-[12px] text-gray-700 px-1 rounded cursor-pointer hover:text-red-500"
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}
