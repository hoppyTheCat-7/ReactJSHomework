// the mood text and the emoji

function MoodDisplay({ moodText, moodEmoji }) {
    console.log({ moodText, moodEmoji })

    const moodStyle = {
        fontSize: "2.5rem",
        color: "#ffb703"
    };

    return (
        <div>
            <h3>Your selected mood:</h3>
            <p style={moodStyle}>{moodText ? `${moodText} ${moodEmoji}` : "No mood selected yet!"}</p>
        </div>
    )
}

export default MoodDisplay