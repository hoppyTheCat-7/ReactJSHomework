import { useState, useEffect } from "react"

function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMousemove(e) {
            console.log(e);

            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }

        window.addEventListener("mousemove", handleMousemove);

        return () => {
            window.removeEventListener("mousemove", handleMousemove)
        };

    }, [])

    return mousePosition;
}

export default useMousePosition