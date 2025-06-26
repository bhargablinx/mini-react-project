import { useState } from "react";
import ItemList from "./components/ItemList";

function App() {
    const [tasks, setTasks] = useState([
        { id: crypto.randomUUID(), title: "Demo Task", isCompleted: false },
    ]);
    const [taskName, setTaskName] = useState("");

    const handleAddTask = () => {
        if (!taskName) return;
        const myTaskObj = {
            id: crypto.randomUUID(),
            title: taskName,
            isCompleted: false,
        };
        setTasks((prev) => [...prev, myTaskObj]);
    };

    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-[375px] h-[667px] bg-white rounded-3xl shadow-lg border border-gray-300 p-4 flex flex-col">
                <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
                    Must-To-Do
                </h1>
                <div className="flex items-center gap-3 px-4">
                    <input
                        onChange={(e) => setTaskName(e.target.value)}
                        value={taskName}
                        type="text"
                        placeholder="Add item..."
                        className="flex-1 border-b border-gray-400 focus:outline-none focus:border-gray-600 text-sm text-gray-800 placeholder-gray-500 bg-transparent"
                    />
                    <button
                        onClick={handleAddTask}
                        className="cursor-pointer text-sm text-white bg-gray-800 hover:bg-gray-900 px-4 py-1 rounded transition"
                    >
                        Add
                    </button>
                </div>
                {/* Task Container */}
                <div className="mt-4 px-4">
                    <ul className="space-y-2">
                        {tasks.map((task) => {
                            return (
                                <ItemList
                                    id={task.id}
                                    title={task.title}
                                    isCompleted={task.isCompleted}
                                />
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default App;
