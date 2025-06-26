import { useState } from "react";

export default function ItemList({ id, title, isCompleted }) {
    const handleCheckBox = (e) => {
        e.target.checked && console.log(isCompleted);
    };

    return (
        <div className="flex justify-between">
            <div className="flex gap-3">
                <input type="checkbox" id={id} onChange={handleCheckBox} />
                <label
                    htmlFor={id}
                    className="text-sm text-gray-800 border-b border-gray-200 pb-1"
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
