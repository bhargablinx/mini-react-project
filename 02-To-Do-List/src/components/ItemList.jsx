import { useEffect, useState } from "react";

export default function ItemList({
    id,
    title,
    tasks,
    setTasks,
    completedTask,
    setCompletedTask,
}) {
    const [isCompleted, setIsCompleted] = useState(false);

    // Sync local state with completedTask prop changes
    useEffect(() => {
        setIsCompleted(completedTask.includes(title));
    }, [completedTask, title]);

    const handleCheckBox = (e) => {
        const checked = e.target.checked;
        setIsCompleted(checked);

        if (checked) {
            // Add to completedTask if not already included
            if (!completedTask.includes(title)) {
                setCompletedTask([title, ...completedTask]);
            }
        } else {
            // Remove from completedTask
            setCompletedTask(completedTask.filter((task) => task !== title));
        }
    };

    const handleDelete = () => {
        const newTasks = tasks.filter((item) => id !== item.id);
        setTasks(newTasks);
        // Also remove from completedTask if present
        setCompletedTask(completedTask.filter((task) => task !== title));
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <input
                    type="checkbox"
                    id={id}
                    onChange={handleCheckBox}
                    checked={isCompleted}
                    className="accent-gray-700"
                />

                <label
                    htmlFor={id}
                    className={`text-sm text-gray-800 border-b border-gray-200 pb-1 select-none ${
                        isCompleted ? "line-through text-gray-400" : ""
                    }`}
                >
                    {title}
                </label>
            </div>
            <button
                onClick={handleDelete}
                className="text-[12px] text-gray-700 px-1 rounded cursor-pointer hover:text-red-500"
                aria-label={`Delete ${title}`}
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
}
