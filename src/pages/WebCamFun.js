import "../styles/WebCamFun.css";
import { useEffect, useRef} from "react";
import snapSound from "../sounds/snap.mp3";

const WebCamFun = () => {

    const video = useRef();
    const canvas = useRef(null);
    const strip = useRef();
    const snap = useRef();
    const redMax = useRef(0);
    const redMin = useRef(0);
    const greenMax = useRef(0);
    const greenMin = useRef(0);
    const blueMax = useRef(0);
    const blueMin = useRef(0);

    useEffect(() => {
        const thisVideo = video.current;

        if (thisVideo) {
            getVideo();
            thisVideo.addEventListener('canplay', paintToCanvas);
        }

        return () => {
            window.removeEventListener('canplay', paintToCanvas);
            let stream = thisVideo.srcObject;
            let tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
        }
    });

    function getVideo() {

        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(localMediaStream => {
                if (!video.current) {
                    return
                } else {
                    console.log("this played");
                    video.current.srcObject = localMediaStream;
                    video.current.play();

                }
                //  DEPRECIATION : 
                //       The following has been depreceated by major browsers as of Chrome and Firefox.
                //       video.src = window.URL.createObjectURL(localMediaStream);
                //       Please refer to these:
                //       Deprecated  - https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL
                //       Newer Syntax - https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject
            })
            .catch(err => {
                return console.error(`OH NO!!!`, err);
            });


    }

    const paintToCanvas = () => {
        const width = video.current.videoWidth;
        const height = video.current.videoHeight;
        const ctx = canvas.current?.getContext('2d');
        canvas.current.width = width;
        canvas.current.height = height;
        console.log(canvas.current);


        setInterval(() => {
            if (!video.current) {
                return;
            } else if (video.current.readyState >= 1) {
                ctx.drawImage(video.current, 0, 0, width, height);
                // take the pixels out
                let pixels = ctx.getImageData(0, 0, width, height);
                //console.log(pixels.data);
                // mess with them
                //pixels = redEffect(pixels);

                //pixels = rgbSplit(pixels);
                // ctx.globalAlpha = 0.8;

                //pixels = greenScreen(pixels);
                // put them back
                ctx.putImageData(pixels, 0, 0);
            }
        }, 16);

    }


    function takePhoto() {
        // played the sound
        snap.current.currentTime = 0;
        snap.current.play();

        // take the data out of the canvas
        const data = canvas.current.toDataURL('image/jpeg');
        const link = document.createElement('a');
        link.href = data;
        link.setAttribute('download', 'handsome');
        link.innerHTML = `<img src="${data}" alt="Beautiful" />`;
        strip.current.insertBefore(link, strip.firstChild);
    }


    // const handleColorChange = (pixels) => {

    //     for (let i = 0; i < pixels.data.length; i += 4) {
    //         pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    //         pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    //         pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    //     }
    //     return pixels;
    // }


    // function redEffect(pixels) {
    //     for (let i = 0; i < pixels.data.length; i += 4) {
    //         pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    //         pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    //         pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
    //     }
    //     return pixels;
    // }

    // function rgbSplit(pixels) {
    //     for (let i = 0; i < pixels.data.length; i += 4) {
    //         pixels.data[i - 150] = pixels.data[i + 0]; // RED
    //         pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    //         pixels.data[i - 550] = pixels.data[i + 2]; // Blue
    //     }
    //     return pixels;
    // }

    // function greenScreen(pixels) {
    //     const levels = [];

    //     document.querySelectorAll('.rgb input').forEach((input) => {
    //         levels[input.name] = input.value;
    //         //console.log(input);
    //     });

    //     for (let i = 0; i < pixels.data.length; i = i + 4) {
    //         let red = pixels.data[i + 0];
    //         let green = pixels.data[i + 1];
    //         let blue = pixels.data[i + 2];
    //         let alpha = pixels.data[i + 3];

    //         if (red >= levels.rmin
    //             && green >= levels.gmin
    //             && blue >= levels.bmin
    //             && red <= levels.rmax
    //             && green <= levels.gmax
    //             && blue <= levels.bmax) {
    //             // take it out!
    //             pixels.data[i + 3] = 0;
    //         }
    //     }

    //     return pixels;
    // }

    function handleRangeUpdate(e) {
        let thisRange = e.target.name;

        if (thisRange === "rmin") {
            redMin.current.value = e.target.value;
            console.log(redMin.current.value);
            //setPlayBack(e.target.value);
            //video.current.playbackRate = e.target.value;
            //console.log(e.target.value);
        } else if (thisRange === "rmax") {
            redMax.current.value = e.target.value;
            console.log(redMax.current.value);
            //setVolume(e.target.value);
            //console.log(e.target.value);
            //video.current.volume = e.target.value;
        }
        //console.log({volumeValue, playbackValue});
    }

    return (
        <div className="camContainer">
            <div className="photobooth">
                <div className="controls">
                    <button onClick={takePhoto}>Take Photo</button>
                    <div className="rgb">
                        <label htmlFor="rmin">Red Min:</label>
                        <input onChange={e => handleRangeUpdate(e)} type="range" min='0' max='255' name="rmin" ref={redMin}></input>
                        <label htmlFor="rmax">Red Max:</label>
                        <input onChange={e => handleRangeUpdate(e)} type="range" min='0' max='255' name="rmax" ref={redMax}></input>
                        <br></br>
                        <label htmlFor="gmin">Green Min:</label>
                        <input type="range" min='0' max='255' name="gmin" ref={greenMin}></input>
                        <label htmlFor="gmax">Green Max:</label>
                        <input type="range" min='0' max='255' name="gmax" ref={greenMax}></input>
                        <br></br>
                        <label htmlFor="bmin">Blue Min:</label>
                        <input type="range" min='0' max='255' name="bmin" ref={blueMin}></input>
                        <label htmlFor="bmax">Blue Max:</label>
                        <input type="range" min='0' max='255' name="bmax" ref={blueMax}></input>
                    </div>
                </div>

                <canvas className="photo" ref={canvas}></canvas>
                <video onCanPlay={paintToCanvas} className="camPlayer" ref={video}></video>
                <div className="strip" ref={strip}></div>
                <audio className="snap" ref={snap} src={snapSound} hidden></audio>
            </div>
        </div>
    )
}

export default WebCamFun;