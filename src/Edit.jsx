/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export default function Edit({ item, setEdit, setTasks }) {
    const [task, setTask] = useState(item.task);

    function handleChange(e) {
        setTask(e.target.value);
    }

    function handleClose() {
        setEdit(null);
    }

    function handleDone() {
        setTasks((tasks) =>
            tasks.reduce(
                (crr, val) => [
                    ...crr,
                    val.id !== item.id
                        ? val
                        : {
                              id: val.id,
                              task: task,
                              date: val.date,
                              checked: false,
                          },
                ],
                []
            )
        );
        handleClose();
    }

    useEffect(() => {
        function handleClick(key) {
            if (key.code === "Space") handleDone();
            else if (key.code === "Escape") handleClose();
        }

        document.addEventListener("keydown", handleClick);
        return () => document.removeEventListener("keydown", handleClick);
    }, [handleClose, handleDone]);

    return (
        <div className="mt-5 flex rounded-md dark:border-bg target:bg-prime border my-5">
            <input
                placeholder="TASK..."
                value={task}
                className="bg-bg dark:bg-black dark:text-bg text-slate-300 w-4/5 rounded-l-md p-3 outline-none"
                onChange={handleChange}
                autoFocus
            />
            <button
                className="w-[10%] border-l bg-prime hover:bg-hover active:bg-prime"
                onClick={handleDone}
            >
                Done
            </button>
            <button
                className="w-[10%] border-l  rounded-r-md bg-prime active:bg-prime hover:bg-hover"
                onClick={handleClose}
            >
                Close
            </button>
        </div>
    );
}
