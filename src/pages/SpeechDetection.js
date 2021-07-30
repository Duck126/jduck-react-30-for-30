import { useEffect, useRef } from "react";
import "../styles/SpeechDetection.css"

const SpeechDetection = () => {

    const wordsRef = useRef(null);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    useEffect(() => {
        recognition.addEventListener('result', e => recognize(e));

        recognition.addEventListener('end', recognition.start);

        recognition.start();

        return () => {
            recognition.stop();
            recognition.removeEventListener('end', recognition.start);
            recognition.removeEventListener('result', e => (e));
        }
    });

    const recognize = (e) => {
        let words = wordsRef.current;
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        if (e.results[0].isFinal) {
            let p = document.createElement('p');
            p.textContent = transcript;
            words.appendChild(p);
        }
    }

    return (
        <div className="speechDContainer">
            <div className="words" ref={wordsRef} contentEditable>
            </div>
        </div>
    )
}

export default SpeechDetection;