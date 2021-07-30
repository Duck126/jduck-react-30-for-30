import { useEffect } from "react";
import "../styles/WhackaMole.css";


const WhackaMole = () => {
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('.score');
    const moles = document.querySelectorAll('.mole');
    let lastHole;
    let timeUp = false;
    let score = 0;

    useEffect(() => {
        moles.forEach(mole => mole.addEventListener('click', bonk));
        return () => {
            moles.forEach(mole => mole.removeEventListener('click', bonk));
        }
    })

    function randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    function randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) {
            console.log('Ah nah thats the same one bud');
            return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }

    function peep() {
        const time = randomTime(200, 1000);
        const hole = randomHole(holes);
        hole.classList.add('up');
        setTimeout(() => {
            hole.classList.remove('up');
            if (!timeUp) peep();
        }, time);
    }

    function startGame() {
        scoreBoard.textContent = 0;
        timeUp = false;
        score = 0;
        peep();
        setTimeout(() => timeUp = true, 10000)
    }

    function bonk(e) {
        if (!e.isTrusted) return; // cheater!
        score++;
        this.parentNode.classList.remove('up');
        scoreBoard.textContent = score;
    }

    return (
        <div className="moleContainer">
            <h1 className="moleHeader">Whack-a-mole! <span className="score">0</span></h1>
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