import useWindowSize from "../hooks/useWindowSize"

function WindowSizeDisplay() {
    const { width, height } = useWindowSize();

    console.log(width, height);

    const layoutStyle = {
        backgroundColor: "#fff",
        color: "#323232",
        borderRadius: "8px",
        padding: "20px",
        transition: "background-color 0.3s ease"
    };

    let layoutMessage;

    // if (width < 600) {
    //     layoutMessage = "Mobile Layout!";
    //     layoutStyle.backgroundColor = "lightblue";
    // } else if(width >= 600 && width <= 1024) {
    //     layoutMessage = "Tablet Layout!";
    //     layoutStyle.backgroundColor = "lightgreen";
    // } else {
    //     layoutMessage = "Desktop Layout!";
    //     layoutStyle.backgroundColor = "lightcoral";
    // }

    if (width < 500) {
        layoutStyle.backgroundColor = "red";
        layoutMessage = "R";
        layoutStyle.color = "violet";
    } else if (width >= 500 && width < 600) {
        layoutStyle.backgroundColor = "orange";
        layoutMessage = "R - A";
        layoutStyle.color = "red";
    } else if (width >= 600 && width < 700) {
        layoutStyle.backgroundColor = "yellow";
        layoutMessage = "R - A - I";
        layoutStyle.color = "orange";
    } else if (width >= 700 && width < 800) {
        layoutStyle.backgroundColor = "green";
        layoutMessage = "R - A - I - N";
        layoutStyle.color = "yellow";
    } else if (width >= 800 && width < 900) {
        layoutStyle.backgroundColor = "skyblue";
        layoutMessage = "R - A - I - N - B";
        layoutStyle.color = "green";
    } else if (width >= 900 && width < 1000) {
        layoutStyle.backgroundColor = "indigo";
        layoutMessage = "R - A - I - N - B - O";
        layoutStyle.color = "blue";
    } else {
        layoutStyle.backgroundColor = "violet";
        layoutMessage = "R - A - I - N - B - O - W";
        layoutStyle.color = "indigo";
    }

    return (
        <div style={layoutStyle}>
            {/* <h2>Window Size Tracker</h2>
            <p>Width: {width}</p>
            <p>Height: {height}</p> */}
            <p style={{fontSize: "2.5rem", fontWeight: "bold"}}>{layoutMessage}</p>
        </div>
    );

}

export default WindowSizeDisplay