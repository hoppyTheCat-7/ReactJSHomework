import { useEffect, useState } from "react"
import "./arrow-keys.css"

// Alternative 1: Two state context:
// function ArrowKeysDisplay() {
//     const [textContent, setTextContent] = useState("");
//     const [textDirection, setTextDirection] = useState("center");

//     useEffect(() => {
//         function handleKeyDown(event) {
//             console.log(event.code);

//             if (event.code === "ArrowUp") {
//                 setTextContent("Arrow UP");
//                 setTextDirection("up");
//             }
//             else if (event.code === "ArrowDown") {
//                 setTextContent("Arrow DOWN");
//                 setTextDirection("down");
//             }
//             else if (event.code === "ArrowLeft") {
//                 setTextContent("Arrow LEFT");
//                 setTextDirection("left");
//             }
//             else if (event.code === "ArrowRight") {
//                 setTextContent("Arrow RIGHT");
//                 setTextDirection("right");
//             }
//             else {
//                 setTextContent("Invalid Key!");
//                 setTextDirection("center");
//             }
//         }

//         window.addEventListener("keydown", handleKeyDown);

//         return () => {
//             window.removeEventListener("keydown", handleKeyDown);
//         };
//     }, [])
//     return (
//         <div className="text-wrapper">
//             <h3 className={`text ${textDirection}`}>
//                 {textContent ? textContent : "Try pressing the arrow keys on your keyboard!"}
//             </h3>
//         </div>
//     )
// }

// Alternative 2: A single state to track
function ArrowKeysDisplay() {
    const [arrowKey, setArrowKey] = useState("center");

    useEffect(() => {
        const handleKeyDown = (event) => {
            console.log(event.code);

            if (
                event.code !== "ArrowUp" && 
                event.code !== "ArrowDown" && 
                event.code !== "ArrowLeft" && 
                event.code !== "ArrowRight"
            ) {
                setArrowKey("invalid");
            }
            else if (event.code === "ArrowUp") {
                setArrowKey("up");
            }
            else if (event.code === "ArrowDown") {
                setArrowKey("down");
            }
            else if (event.code === "ArrowLeft") {
                setArrowKey("left");
            }
            else if (event.code === "ArrowRight") {
                setArrowKey("right");
            }
            else {
                setArrowKey("center");
            }
        }

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        }
    }, [])

    const makeTextContent = (arrowKey) => {
        if (arrowKey === "invalid") return "Invalid Key!";
        else if (arrowKey === "up") return "ArrowUP";
        else if (arrowKey === "down") return "ArrowDOWN";
        else if (arrowKey === "left") return "ArrowLEFT";
        else if (arrowKey === "right") return "ArrowRIGHT";
        else return "Try pressing the arrow keys on your keyboard!"
    };
    return (
        <div className="text-wrapper">
            <h3 className={`text ${arrowKey}`}>{makeTextContent(arrowKey)}</h3>
        </div>
    )
}

export default ArrowKeysDisplay