import { useEffect } from "react"
import "../styles/KeySequence.css"

const KeySequence = () => {

    const pressed = [];
    const secretCode = 'johnduck';

    useEffect(() => {
        console.clear();
        window.addEventListener('keyup', sequence);

        return () => {
            window.removeEventListener('keyup', sequence);
        }
    });

    const sequence = (e) => {
        console.log(e.key);
            pressed.push(e.key);
            pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
            if (pressed.join('').includes(secretCode)) {
                console.log('DING DING! YOU WIN!');
                //cornify_add();
            }
            console.log(pressed);
    }

    return (
        <>
            <div className="keyContainer">
                <h1 className="keyTitle">Type the following letters in the correct order to win! (Check Console)</h1>
                <p className="letters">K, C, D, U, O, H, J, N</p>
            </div>
        </>
    )
}

export default KeySequence;
