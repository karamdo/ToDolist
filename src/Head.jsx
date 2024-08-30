// eslint-disable-next-line react/prop-types
function Head({ sorted, setSorted, remainingNum, shown, setShown }) {
    function handleChange(e) {
        setShown(e.target.value);
    }

    return (
        <div className="mt-2 border-b-2 flex justify-between dark:text-bg">
            <p className="text-4xl inline">{remainingNum} Tasks remaining</p>
            <div className="">
                {shown === "All" && (
                    <button
                        className="border rounded-md w-52 hover:bg-wHover active:bg-bg dark:hover:bg-dHover dark:active:bg-black"
                        onClick={() => setSorted((sorted) => !sorted)}
                    >
                        {sorted ? "sorted by date" : "sorted by checked"}
                    </button>
                )}
                <select
                    className="bg-bg border py-[.5px] m-2 rounded-md text-center hover:bg-wHover active:bg-bg cursor-pointer dark:bg-black dark:hover:bg-dHover dark:active:bg-black"
                    onChange={handleChange}
                >
                    <option value="All">Show All Tasks</option>
                    <option value="Active">Show Active Tasks</option>
                    <option value="Completed">Show Completed Tasks</option>
                </select>
            </div>
        </div>
    );
}

export default Head;
