import { useState } from "react";
import MoodDisplay from "./MoodDisplay";

function MoodSelector({ moods }) {
    console.log(moods);
    const [mood, setMood] = useState(null);

    const handleMoods = (newMood) => {
        setMood(newMood)
    };

    return (
        <div className="mood-container">
            <h1>Mood Tracker</h1>
            <h2>How are you feeling today?</h2>
            <h3>Please, select your mood:</h3>
            {Object.keys(moods).map((moodName, index) => {
                return <button className="mood-btn" key={index} onClick={() => handleMoods(moodName)}>{moodName}</button>
            })}
            <MoodDisplay moodText={mood} moodEmoji={moods[mood]} />
        </div>
    )
}

export default MoodSelector