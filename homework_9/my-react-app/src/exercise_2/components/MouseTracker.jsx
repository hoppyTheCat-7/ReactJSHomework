import useMousePosition from "../hooks/useMousePosition";

function MouseTracker() {
    const { x, y } = useMousePosition();

    console.log(x, y);

    const divStyle = {
        background: "linear-gradient(to top, #c6ffdd, #fbd786, #f7797d)",
        borderRadius: "8px",
        width: "350px",
        height: "180px",
        padding: "20px",
        margin: "30px auto",
        boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        color: "#323232",
        fontSize: "1.1rem",
    };

    const tinyDivStyle = {
        width: "50px",
        height: "50px",
        backgroundColor: "#2ec4b6",
        borderRadius: "5px",
        position: "fixed",
        left: `${x}px`,
        top: `${y}px`,
        transform: "translate(-50%, -50%)",
    };

    return (
        <>
            <div style={divStyle}>
                <h2>Mouse Tracker</h2>
                <p><strong>x-axis:</strong> {`${x}px`}</p>
                <p><strong>y-axis:</strong> {`${y}px`}</p>
            </div>

            <div style={tinyDivStyle}></div>
        </>
    );
}

export default MouseTracker