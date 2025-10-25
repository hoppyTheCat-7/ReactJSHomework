import { useState } from "react";
import lightBulbOff from "../../assets/lightbulbs/lightbulb-off.png"
import lightBulbOn from "../../assets/lightbulbs/lightbulb-on.png"
import "./light-bulb.css"

function LightBulbToggle2() {
    const [isLightOff, setIsLightOff] = useState(true);
    const [opacity, setOpacity] = useState(false);

    const handleMouseEnter = () => {
        setIsLightOff(false);
        setOpacity(true);
    }

    const handleMouseLeave = () => {
        setIsLightOff(true);
        setOpacity(false);
    }

    return (
        <section className="light-wrapper">
            <div>
                <h1>On / Off on a Hover</h1>
                <img
                    src={isLightOff ? lightBulbOff : lightBulbOn}
                    alt="A light bulb"
                />
            </div>
            <button
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={`${opacity ? "opaque" : "transparent"}`}
            >{isLightOff ? "Turn on!" : "Turn off!"}</button>
        </section>
    )
}

export default LightBulbToggle2