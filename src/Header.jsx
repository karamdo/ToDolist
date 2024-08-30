import { useEffect, useRef, useState } from "react";

function Header() {
    const toggleMood = useRef(document.documentElement);
    const [isDark, setIsDark] = useState(false);

    function dodis() {
        if (!toggleMood.current.classList.contains("dark"))
            toggleMood.current.classList.add("dark");
        else toggleMood.current.classList.remove("dark");
        setIsDark(!isDark);
    }

    useEffect(() => {
        toggleMood.current = document.documentElement;
    }, []);

    return (
        <header className="bg-prime flex h-12 items-center justify-between border-b px-2">
            <h2 className="self-center font-mono text-4xl font-bold">
                ToDo Tasks
            </h2>

            <div>
                <button
                    onClick={dodis}
                    className="border rounded-md px-5 hover:bg-hover active:bg-prime"
                >
                    {!isDark ? "dark" : "light"}
                </button>
            </div>
        </header>
    );
}

export default Header;
