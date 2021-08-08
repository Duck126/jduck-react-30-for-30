import { useEffect } from 'react';
import '../styles/DrumStyles.css';
import kbData from '../kbData';
import KeyItem from '../components/KeyItem';
import AudioItem from '../components/audio';

const DrumKit = () => {

    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            playSound(event);
        });
    });


    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

        if (!audio) return;
        const playPromise = audio.play();
        console.log(playPromise);
        audio.currentTime = 0;
        if (playPromise !== undefined) {
            playPromise.then(res => {
            }).then(res => {
                return res;
            })
                .catch(error => {
                    console.log('Play Sound Failed: ' + error);
                })
        }
    }

    return (
        <div className="App">
            <div className="keys">
                {kbData.map((item, index) => {
                    return (
                        <>
                            <KeyItem key={index} dataKey={item.keyId} soundName={item.soundName} keyLetter={item.keyLetter}></KeyItem>
                            <AudioItem key={index + 1} dataKey={item.keyId} soundSrc={item.soundSrc}></AudioItem>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default DrumKit