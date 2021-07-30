import { useEffect, useRef, useState } from "react";
import "../styles/SpeechSynthesis.css";

const SpeechSynth = () => {

  const msg = new SpeechSynthesisUtterance();
  const [msgText, setMessage] = useState("Hello! I love JavaScript 👍");
  const [rateValue, setRate] = useState(1);
  const [pitchValue, setPitch] = useState(1);
  const [currentVoice, setCurrentVoice] = useState(null);
  const [voices, setVoices] = useState([]);
  const rateRef = useRef(null);
  const pitchRef = useRef(null);
  const voicesDropdown = useRef(null);
  

  msg.text = msgText;
  msg.pitch = pitchValue;
  msg.rate = rateValue;
  msg.voice = currentVoice;

  useEffect(() => {
    populateVoices();
  },[])


  function populateVoices() {
    let voiceList = speechSynthesis.getVoices()
    setVoices(voiceList);
  };

  function setVoice(e) {
    msg.voice = voices.find(voice => voice.name === e.target.value);
    setCurrentVoice(msg.voice);
    toggle();
  }

  const handleChange = (e) => {
    setMessage(e.target.value);
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function setOption(e) {
    let thisName = e.target.name;
    if (thisName === "rate") {
      setRate(e.target.value);
    } else if (thisName === "pitch") {
      setPitch(e.target.value);
    }
    toggle();
  }


  return (
    <div className="speechSContainer">
      <div className="voiceinator">
        <h1 className="speechTitle">The Voiceinator 5000</h1>
        <select id="voices" ref={voicesDropdown} onClick={populateVoices} onChange={e => setVoice(e)}>
          <option name="voice" value="">Select A Voice</option>
          {voices.filter(voice => voice.lang.includes('en'))
            .map(voice => { return <option  key={voice.name} value={voice.name}>{voice.name} ({voice.lang})</option> })
          }
        </select>
        <label htmlFor="rate">Rate:</label>
        <input ref={rateRef} name="rate" type="range" min="0" max="3" value={rateValue} step="0.1" onChange={(e) => setOption(e)}></input>
        <label htmlFor="pitch">Pitch:</label>
        <input ref={pitchRef} name="pitch" type="range" min="0" max="2" step="0.1" value={pitchValue} onChange={(e) => setOption(e)}></input>
        <textarea name="text" defaultValue={msgText} onChange={e => handleChange(e)}></textarea>
        <button id="stop" onClick={() => toggle(false)}>Stop!</button>
        <button id="speak" onClick={toggle}>Speak</button>
      </div>
    </div>
  )
}

export default SpeechSynth;