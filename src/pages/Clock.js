import { useState } from 'react';
import '../styles/ClockStyles.css';
import { useInterval } from '../utils/hooks/useInterval';

const Clock = () => {
    const date = new Date();
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useInterval(() => {
        setSeconds(date.getSeconds())
        setMinutes(date.getMinutes())
        setHours(date.getHours())
    }, 1000);

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minsDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    // console.log(secondsDegrees, minsDegrees, hourDegrees);


    const dynamicSec = {
        transform: `rotate(${secondsDegrees}deg)`,
        transition: `all 0.05s`,
    }

    const dynamicMin = {
        transform: `rotate(${minsDegrees}deg)`,
        transition: `all 0.05s`,
    }

    const dynamicHour = {
        transform: `rotate(${hourDegrees}deg)`,
        transition: `all 0.05s`,
        
    }

    return (
        <>
            <h2>React Analog Clock</h2>
            <div className="container">
                <div className="clock">
                    <div className="clock-face">
                        <div className="hand hour-hand" style={dynamicHour}></div>
                        <div className="hand min-hand" style={dynamicMin}></div>
                        <div className={`hand second-hand`} style={dynamicSec}></div>
                    </div>
                </div>
                <div className='digital'>
                    <div><p>Hour: {hours}</p></div>
                    <div><p>Min: {minutes}</p></div>
                    <div><p>Secs: {seconds}</p></div>
                </div>

            </div>
        </>
    )
}

export default Clock;