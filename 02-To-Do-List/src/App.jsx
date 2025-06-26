import { useState } from "react";
import ItemList from "./components/ItemList";
import { useEffect } from "react";

function App() {
    const [tasks, setTasks] = useState([
        { id: crypto.randomUUID(), title: "Learn React" },
    ]);
    const [taskName, setTaskName] = useState("");
    const [completedTask, setCompletedTask] = useState([]);
    const [view, setView] = useState("home"); // "home" or "completed"

    const handleAddTask = () => {
        if (!taskName) return;
        const myTaskObj = {
            id: crypto.randomUUID(),
            title: taskName,
        };
        setTasks((prev) => [...prev, myTaskObj]);
        setTaskName("");
    };

    useEffect(() => {
        console.log(completedTask);
    }, [completedTask]);

    return (
        <section className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-[375px] h-[667px] bg-white rounded-3xl shadow-lg border border-gray-300 p-4 flex flex-col">
                <h1 className="text-xl font-bold text-center text-gray-800 mb-4">
                    Must-To-Do
                </h1>

                {/* Input + Add button */}
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

                {/* Dropdown to select view */}
                <div className="mt-4 px-4">
                    <select
                        value={view}
                        onChange={(e) => setView(e.target.value)}
                        className="w-full text-sm border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-300"
                    >
                        <option value="home">Home (All Tasks)</option>
                        <option value="completed">Completed Tasks</option>
                    </select>
                </div>

                {/* Task Container */}
                <div className="mt-4 px-4 flex-1 overflow-y-auto">
                    <ul className="space-y-2">
                        {view === "home"
                            ? tasks.map((task) => (
                                  <ItemList
                                      key={task.id}
                                      id={task.id}
                                      title={task.title}
                                      tasks={tasks}
                                      setTasks={setTasks}
                                      completedTask={completedTask}
                                      setCompletedTask={setCompletedTask}
                                  />
                              ))
                            : completedTask.map((task) => (
                                  <li
                                      key={task.id}
                                      className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-2 text-gray-500 text-sm line-through select-none"
                                  >
                                      {/* Optional check icon */}
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5 text-green-500 flex-shrink-0"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={3}
                                      >
                                          <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              d="M5 13l4 4L19 7"
                                          />
                                      </svg>
                                      {
                                          task.title ||
                                              task /* Adjust if your completedTask items are strings or objects */
                                      }
                                  </li>
                              ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default App;
