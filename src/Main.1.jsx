import { useRef, useEffect, useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";
import Tasks from "./Tasks";
import Edit from "./Edit";
import Head from "./Head";

// eslint-disable-next-line react/prop-types
export default function Main({ sorted, setSorted }) {
    const [task, setTask] = useState("");
    const [edit, setEdit] = useState(null);
    const [shown, setShown] = useState("All");
    const [tasks, setTasks] = useLocalStorageState([], "tasks");
    const remaining = tasks.reduce((tot, crr) => (tot += !crr.checked), 0);
    const taskBar = useRef(null);

    if (sorted) {
        tasks.sort((a, b) => a.id - b.id);
    } else {
        tasks.sort((a, b) => a.checked - b.checked);
    }

    function handleChange(e) {
        setTask(e.target.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function handleAddTask() {
        if (!task) {
            return;
        }
        setTasks((tasks) => [
            ...tasks,
            {
                id: Date.now(),
                task: task,
                date: Date()
                    .split(" ")
                    .filter((_, i) => i <= 3)
                    .join(" "),
                checked: false,
            },
        ]);
        setTask("");
    }

    function handleCheck(item) {
        setTasks((tasks) =>
            tasks.map((task) =>
                task.id === item.id ? { ...item, checked: !item.checked } : task
            )
        );
    }

    function handleRemove(item) {
        setTasks((tasks) => tasks.filter((task) => task.id !== item.id));
    }

    function handleEdit(id) {
        setEdit(id);
    }

    useEffect(() => {
        function handleKeyPress(key) {
            if (key.code === "Enter") {
                document.activeElement === taskBar.current
                    ? handleAddTask()
                    : taskBar.current.focus();
            }
        }
        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [handleAddTask]);

    return (
        <div className="flex-1 w-4/5 mx-auto">
            <Head
                sorted={sorted}
                setSorted={setSorted}
                remainingNum={remaining}
                shown={shown}
                setShown={setShown}
            />
            {tasks.map((item) => {
                return shown === "All" ||
                    (shown === "Active" && !item.checked) ||
                    (shown === "Completed" && item.checked) ? (
                    item.id === edit ? (
                        <Edit
                            item={item}
                            setEdit={setEdit}
                            key={item.id}
                            setTasks={setTasks}
                        />
                    ) : (
                        <Tasks
                            item={item}
                            onCheck={handleCheck}
                            onRemove={handleRemove}
                            key={item.id}
                            onEdit={handleEdit}
                        />
                    )
                ) : null;
            })}
            <div className="mt-5 flex rounded-md dark:border-bg target:bg-prime border mb-8">
                <input
                    placeholder="TASK..."
                    value={task}
                    className="bg-bg dark:bg-black dark:text-bg text-slate-300 w-4/5 rounded-l-md p-3 outline-none"
                    onChange={handleChange}
                    autoFocus
                    ref={taskBar}
                />
                <button
                    className="w-1/5 rounded-r-md bg-prime border-l hover:bg-hover active:bg-prime"
                    onClick={handleAddTask}
                >
                    add Task
                </button>
            </div>
        </div>
    );
}
