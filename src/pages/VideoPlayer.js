import { useEffect, useRef, useState } from 'react';
import '../styles/VideoPlayer.css';

const VideoPlayer = () => {
    /* Get Our Elements */
    const player = useRef(null);
    const video = useRef(null);
    const progress = useRef(null);
    const progressBar = useRef(null);
    const toggle = useRef(null);
    const skipButtons = useRef(null);
    const ranges = useRef(null);
    let mousedown = false;

    const [playbackValue, setPlayBack] = useState(1);
    const [volumeValue, setVolume] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [currentDuration, setDuration] = useState(596.5);
    const [currentProgress, setProgress] = useState(0);

    useEffect(() => {
        const currentProgress = progress.current;
        const currentVideo = progress.current;

        video.current.addEventListener('play', updateButton);
        video.current.addEventListener('pause', updateButton);
        video.current.addEventListener('timeupdate', handleProgress);
        progress.current.addEventListener('click', scrub);
        progress.current.addEventListener('mousemove', (e) => mousedown && scrub(e));
        // eslint-disable-next-line react-hooks/exhaustive-deps
        progress.current.addEventListener('mousedown', () => mousedown = true);
        progress.current.addEventListener('mouseup', () => mousedown = false);
        return () => {
            currentVideo.removeEventListener('play', updateButton);
            currentVideo.removeEventListener('pause', updateButton);
            currentVideo.removeEventListener('timeupdate', handleProgress);
            currentProgress.removeEventListener('click', scrub);
            currentProgress.removeEventListener('mousemove', (e) => mousedown && scrub(e));
            currentProgress.removeEventListener('mousedown', () => mousedown = true);
            currentProgress.removeEventListener('mouseup', () => mousedown = false);
        }
    }, [video])

    /* Build out functions */
    function togglePlay() {
        const method = video.current.paused ? 'play' : 'pause';
        video.current[method]();
    }

    function updateButton() {
        if (!video.current) {
            return;
        } else {
            const icon = this.paused ? '►' : '❚ ❚';
            toggle.current.textContent = icon;
        }

    }

    function skip(e) {
        let time = e.target.dataset.skip;
        video.current.currentTime += parseFloat(time);
    }

    function handleRangeUpdate(e) {
        let thisRange = e.target.name;

        if (thisRange === "playbackRate") {
            setPlayBack(e.target.value);
            video.current.playbackRate = e.target.value;
            //console.log(e.target.value);
        } else if (thisRange === "volume") {
            setVolume(e.target.value);
            //console.log(e.target.value);
            video.current.volume = e.target.value;
        }
    }

    const handleProgress = () => {
        if (!video.current) {
            return;
        } else {
            const newpercent = Math.ceil((video.current.currentTime / currentDuration) * 100);
            setProgress(newpercent);
        }
    }

    function scrub(e) {
        const scrubTime = (e.offsetX / progress.current.offsetWidth) * video.current.duration;
        console.log(scrubTime);
        video.current.currentTime = scrubTime;
    }

    const Progress = ({ done }) => {
        console.log(done);
        return (
            <div className="progress__filled" ref={progressBar} style={{ flexBasis: `${done}%` }}></div>
        )
    }

    return (
        <div className="videoContainer">
            <div className="player" ref={player}>
                <video className="player__video viewer" onClick={togglePlay} ref={video} volume={volumeValue} src="/30for30video.mp4"></video>
                <div className="player__controls">
                    <div className="progress" ref={progress}>
                        <Progress done={currentProgress} />
                    </div>
                    <button className="player__button toggle" ref={toggle} onClick={togglePlay} title="Toggle Play">►</button>
                    <input type="range" onChange={e => handleRangeUpdate(e)} name="volume" className="player__slider" ref={ranges} min="0" max="1" step="0.05" value={volumeValue}></input>
                    <input type="range" onChange={e => handleRangeUpdate(e)} name="playbackRate" className="player__slider" ref={ranges} min="0.5" max="2" step="0.1" value={playbackValue}></input>
                    <button data-skip="-10" ref={skipButtons} onClick={skip} className="player__button">« 10s</button>
                    <button data-skip="25" ref={skipButtons} onClick={skip} className="player__button">25s »</button>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer;