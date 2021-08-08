
const KeyItem = (props) => {

    return (
        <div data-key={props.dataKey} className="key">
            <kbd>{props.keyLetter}</kbd>
            <span className="sound">{props.soundName}</span>
        </div>
    )
}

export default KeyItem;