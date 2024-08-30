/* eslint-disable react/prop-types */
import  { useState } from "react";

function TextExpander({
    children,
    collapsedNumWords = 10,
    expandButtonText = "more",
    collapsedButtonText = "less",
    buttonColor = "#1f09cd",
    buttonInLine = true,
    className = "",
}) {
    const buttonStyle = {
        marginLeft: "6px",
        display: "inline",
        border: "none",
        backgroundColor: "transparent",
        color: buttonColor,
        cursor: "pointer",
        font: "inherit",
    };
    const [shown, setShown] = useState(children.length>collapsedNumWords ? buttonInLine : false);
    const numShown = shown ? collapsedNumWords : children.length;
    let text = shown
        ? children.split("").slice(0, numShown).join("") + "..."
        : children;
    function handleShown() {
        setShown(!shown);
    }
    return (
        <div className={className}>
            <p>
                {text}
                {children.length>collapsedNumWords && <button style={buttonStyle} onClick={handleShown}>{`${
                    shown ? expandButtonText : collapsedButtonText
                }`}</button>}
            </p>
        </div>
    );
}

export default TextExpander;
