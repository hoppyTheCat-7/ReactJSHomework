import { useState } from "react"
import lightBulbOff from "../../assets/lightbulbs/lightbulb-off.png"
import lightBulbOn from "../../assets/lightbulbs/lightbulb-on.png"
import "./light-bulb.css"

function LightBulbToggle() {
    const [isLightOff, setIsLightOff] = useState(true);

    const handleLightSwitch = () => {
        setIsLightOff(!isLightOff);
    };

    return (
        <section className="light-wrapper">
            <div>
                <h1>On / Off on a Click</h1>
                <img
                    src={isLightOff ? lightBulbOff : lightBulbOn}
                    alt="A light bulb"
                />
            </div>
            <button
                onClick={handleLightSwitch}
            >{isLightOff ? "Turn on!" : "Turn off!"}</button>
        </section>
    )
}

export default LightBulbToggle