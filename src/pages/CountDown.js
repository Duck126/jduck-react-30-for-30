/* eslint-disable jsx-a11y/heading-has-content */
import { useEffect, useRef } from "react";
import "../styles/CountDown.css";

const CountDown = () => {

    const endTime = useRef(0);
    const timerDisplay = useRef(0);
    let countdown = 0;

    useEffect(() => {
        const buttons = document.querySelectorAll('[data-time]');
        buttons.forEach(button => button.addEventListener('click', startTimer));
        document.customForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const mins = this.minutes.value;
            console.log(mins);
            timer(mins * 60);
            this.reset();
        });
        return () => {
            buttons.forEach(button => button.removeEventListener('click', startTimer));
            document.removeEventListener('submit', function (e) {
                e.preventDefault();
            });
        }
    })

    function timer(seconds) {
        // clear any existing timers
        clearInterval(countdown);

        const now = Date.now();
        const then = now + seconds * 1000;
        displayTimeLeft(seconds);
        displayEndTime(then);

        countdown = setInterval(() => {
            const secondsLeft = Math.round((then - Date.now()) / 1000);
            // check if we should stop it!
            if (secondsLeft < 0) {
                clearInterval(countdown);
                return;
            }
            // display it
            displayTimeLeft(secondsLeft);
        }, 1000);
    }

    function displayTimeLeft(seconds) {

        if (!timerDisplay.current) {
            return
        } else {
            const minutes = Math.floor(seconds / 60);
            const remainderSeconds = seconds % 60;
            const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
            document.title = display;
            timerDisplay.current.textContent = display;
        }
    }

    function displayEndTime(timestamp) {
        const end = new Date(timestamp);
        const hour = end.getHours();
        const adjustedHour = hour > 12 ? hour - 12 : hour;
        const minutes = end.getMinutes();
        endTime.current.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    function startTimer() {
        console.log("This Ran")
        const seconds = parseInt(this.dataset.time);
        timer(seconds);
    }

    return (
        <div className="countDownContainer">
            <div className="timer">
                <div className="timer__controls">
                    <button data-time="20" className="timer__button">20 Secs</button>
                    <button data-time="300" className="timer__button">Work 5</button>
                    <button data-time="900" className="timer__button">Quick 15</button>
                    <button data-time="1200" className="timer__button">Snack 20</button>
                    <button data-time="3600" className="timer__button">Lunch Break</button>
                    <form name="customForm" id="custom">
                        <input type="text" name="minutes" placeholder="Enter Minutes"></input>
                    </form>
                </div>
                <div className="display">
                    <h1 className="display__time-left" ref={timerDisplay}></h1>
                    <p className="display__end-time" ref={endTime}></p>
                </div>
            </div>
        </div>
    )
}

export default CountDown;