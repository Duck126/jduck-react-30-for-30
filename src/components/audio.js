const AudioItem = (props) => {
    return (
        <audio data-key={props.dataKey}>
            <source src={props.soundSrc} type='audio/wav'></source>
        </audio>
    )
}

export default AudioItem;