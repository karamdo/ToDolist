import TextExpander from "./TextExpander";

/* eslint-disable react/prop-types */
export default function Tasks({ item, onRemove, onCheck, onEdit }) {
    return (
        <div
            className={`${item.checked ? "bg-checked" : "bg-prime"} my-5 flex items-center justify-between rounded-md border border-black dark:border-bg p-3 hover:bg-complete max-[438px]:text-base max-[657px]:flex-col`}
        >
            <TextExpander
                collapsedNumWords={28}
                className={`font-bold w-2/3 overflow-auto max-[657px]:w-full max-[438px]:text-base ${item.checked ? "line-through" : ""}`}
            >
                {item.task}
            </TextExpander>
            <div className="flex w-1/3 items-center justify-between max-[657px]:w-full max-[438px]:text-base">
                <p className="text-base">{item.date}</p>
                <button onClick={() => onRemove(item)}>❌</button>
                <input
                    checked={item.checked}
                    type="checkbox"
                    onChange={() => onCheck(item)}
                    className="size-8 m-2 accent-black dark:accent-bg dark:bg-black outline-none"
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
