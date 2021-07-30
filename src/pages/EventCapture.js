import { useEffect } from "react";
import "../styles/EventCapture.css";

const EventCapture = () => {

    useEffect(() => {
        const divs = document.querySelectorAll('div');
        const button = document.querySelector('button');

        divs.forEach(div => div.addEventListener('click', logText, {
            capture: false,
            once: true
        }));

        button.addEventListener('click', () => {
            console.log('Click!!!');
        }, {
            once: true
        });
    },[]);


    function logText(e) {
        console.log(this.classList.value);
        console.trace(this.classList.value);
    }

    return (
        <>
            <div className="eventContainer">
                <div className="one eventItem">Class One
                    <div className="two eventItem"> Class Two
                        <div className="three eventItem"> Class Three
                        </div>
                    </div>
                </div>
            </div>
            <button></button>
        </>
    )
}

export default EventCapture;