import TextExpander from "./TextExpander";

/* eslint-disable react/prop-types */
export default function Tasks({ item, onRemove, onCheck, onEdit }) {
    return (
        <div
            className={`${item.checked ? "bg-checked" : "bg-prime"} my-5 flex items-center justify-between rounded-md border border-black dark:border-bg p-3 hover:bg-complete`}
        >
            <TextExpander
                collapsedNumWords={28}
                className={`font-bold w-2/3 overflow-auto ${item.checked ? "line-through" : ""}`}
            >
                {item.task}
            </TextExpander>
            <div className="flex w-1/3 items-center justify-between">
                <p>{item.date}</p>
                <button onClick={() => onRemove(item)}>❌</button>
                <input
                    checked={item.checked}
                    type="checkbox"
                    onChange={() => onCheck(item)}
                    className="h-6 w-6 accent-black dark:accent-bg dark:bg-black outline-none"
                />
                <button
                    className="border rounded-md px-1 hover:bg-hover active:bg-prime"
                    onClick={() => onEdit(item.id)}
                >
                    Edit
                </button>
            </div>
        </div>
    );
}
