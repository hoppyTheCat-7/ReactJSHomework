import { useEffect, useState } from "react"

function DynamicCounter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter > 0) document.body.style.backgroundColor = "#00ff00";
        else if (counter < 0) document.body.style.backgroundColor = "#ff0000";
        else if (counter === 0) document.body.style.backgroundColor = "#fff";
    }, [counter])
    console.log(counter);

    return (
        <div className="counter-container">
            <h1>Simple Counter with Dynamic Background</h1>
            <h2 style={{ fontSize: "3rem" }}>{counter <= -11 ? "You can't go below -10" : counter}</h2>
            <div className="btn-container">
                <button className="counter-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
                <button className="counter-btn" onClick={() => setCounter(counter - 1)} disabled={counter <= -11}>Decrement</button>
                <button className="counter-btn" onClick={() => setCounter(0)}>Reset</button>
            </div>
        </div>
    )
}

export default DynamicCounter