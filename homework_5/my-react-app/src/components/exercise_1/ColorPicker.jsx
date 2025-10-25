import { useEffect, useState } from "react"
import "./color-picker.css"

function ColorPicker({ colors }) {
    const [backgroundColor, setBackgroundColor] = useState("grey");
    const [hoveredColor, setHoveredColor] = useState(null);
    // Part 2
    const [colorPalette, setColorPalette] = useState(colors); // the array
    const [color, setColor] = useState(""); // the input color value
    const [error, setError] = useState(""); // error validation

    const handleClick = (nextColor) => {
        setBackgroundColor(nextColor);
    };

    const handleMouseEnter = (color) => {
        setHoveredColor(color);
    };

    const handleMouseLeave = () => {
        setHoveredColor(null);
    };

    const handleColorInput = (e) => {
        setColor(e.target.value);
        console.log(e.target.value);
        setError("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (color.trim() === "") {
            setError("Please, enter a valid color name or hex code!");
        }
        else if (colorPalette.includes(color)) {
            setError(`The color ${color} already exists!`);
        }
        else if (!/^(#[0-9A-Fa-f]{3,6}|[a-zA-Z]+)$/.test(color)) {
            setError("That's not a valid color value!");
        } else {
            setColorPalette([...colorPalette, color]);
            console.log("Updated colorPalette array:", colorPalette, color);
            setColor("");
            setError("");
            alert(`The color ${color} has been added!`);
        }
    };

    return (
        <div className="main-wrapper">
            <h1>Color Picker</h1>
            <div style={{ backgroundColor: backgroundColor }} className="text-holder">
                <p style={{
                    color:
                        backgroundColor === "white" ||
                            backgroundColor === "#ffffff" ||
                            backgroundColor === "#fff"
                            ? "#000"
                            : "#fff"
                }}>
                    Make me change my color!
                </p>
            </div>
            <div>
                {colorPalette.map((color, index) => {
                    return <button
                        key={index}
                        style={{
                            backgroundColor: color,
                            opacity: hoveredColor === color ? 0.8 : 1,
                            color:
                                color === "white" ||
                                    color === "#ffffff" ||
                                    color === "#fff"
                                    ? "#000" : "#fff"
                        }}
                        className="color-btn"
                        onClick={() => handleClick(color)}
                        onMouseEnter={() => handleMouseEnter(color)}
                        onMouseLeave={() => handleMouseLeave(null)}
                    >{color}</button>
                })}
            </div>
            <form onSubmit={handleSubmit} className="form-wrapper">
                <label>
                    <input
                        type="text"
                        value={color}
                        placeholder="Please, enter a valid color name or hex code!"
                        onChange={handleColorInput}
                    />
                </label>
                <button type="submit">Add Color</button>
            </form>
            {error && <p className="error-msg">{error}</p>}
        </div>
    )
}

export default ColorPicker