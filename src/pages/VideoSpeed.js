import { useEffect, useRef } from "react";
import "../styles/VideoSpeed.css";

const VideoSpeed = () => {

    const speed = useRef(null);
    const bar = useRef(null);
    const video = useRef(null);
   
    useEffect(() => {
        speed.current.addEventListener('mousemove', handleMove);

    })

    function handleMove(e) {
        const y = e.pageY - this.offsetTop;
        const percent = y / this.offsetHeight;
        const min = 0.4;
        const max = 4;
        const height = Math.round(percent * 100) + '%';
        const playbackRate = percent * (max - min) + min;
        bar.current.style.height = height;
        bar.current.textContent = playbackRate.toFixed(2) + '×';
        video.current.playbackRate = playbackRate;
    }

    return (
        <div className="speedContainer">
            <div className="speedWrapper">
                <video className="flex speedVideo" ref={video} width="765" height="430" src="/videospeed.mp4" loop controls></video>
                <div className="speedVal" ref={speed}>
                    <div className="speed-bar" ref={bar}>1×</div>
                </div>
            </div>
        </div>
    )
}

export default VideoSpeed;