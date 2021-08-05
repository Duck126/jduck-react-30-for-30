import { useEffect, useRef } from "react";
import "../styles/WhackaMole.css";


const WhackaMole = () => {
    const holes = useRef(null);
    const holeLength = useRef(null);
    const scoreBoard = useRef(0);
    let lastHole;
    let timeUp = false;
    let score = 0;

    useEffect(() => {
        const moles = document.querySelectorAll('.mole');

        moles.forEach(mole => mole.addEventListener('click', e => bonk(e)));
        holes.current = document.querySelectorAll('.hole');
        return () => {
            moles.forEach(mole => mole.removeEventListener('click', e => bonk(e)));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        holeLength.current = holes.current.length;
    }, []);

    function randomTime(min, max) {
        return Math.round(Math.random() * (max - min));
    }

    function randomHole(holes) {
        const length = holeLength.current;
        const idx = Math.floor(Math.random() * length);
        const hole = holes[idx];
        if (hole === lastHole) {
            console.log('Ah nah thats the same one bud');
            return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }

    function peep() {
        const time = randomTime(400, 1400);
        const hole = randomHole(holes.current);
        // console.log(hole);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) peep();
        }, time);
    }

    function startGame() {
        scoreBoard.current.textContent = 0;
        timeUp = false;
        score = 0;
        peep();
        setTimeout(() => timeUp = true, 10000)
    }

    function bonk(e) {
        if (!e.isTrusted) return; // cheater!
        score++;

        e.target.parentNode.classList.remove('up');
        scoreBoard.current.textContent = score;
    }

    return (
        <div className="moleContainer">
            <h1 className="moleHeader">Whack-a-mole! <span className="score" ref={scoreBoard}>0</span></h1>
            <button className="gameButton" onClick={startGame}>Start!</button>

            <div className="game">
                <div className="hole hole1">
                    <div className="mole"></div>
                </div>
                <div className="hole hole2">
                    <div className="mole"></div>
                </div>
                <div className="hole hole3">
                    <div className="mole"></div>
                </div>
                <div className="hole hole4">
                    <div className="mole"></div>
                </div>
                <div className="hole hole5">
                    <div className="mole"></div>
                </div>
                <div className="hole hole6">
                    <div className="mole"></div>
                </div>
            </div>
        </div>
    )
}

export default WhackaMole;