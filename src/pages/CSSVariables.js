import { useState } from 'react';
import '../styles/CSSVariables.css';

const CSSVariables = () => {

    const [spaceValue, setSpaceValue] = useState(10);
    const [blurValue, setBlurValue] = useState(10);
    const [colorValue, setColorValue] = useState('#ffc600');

    const handleSpacing = (e) => {
        
        setSpaceValue(e.target.value);
        console.log(e.target.value);

    }

    const handleBlur = (e) => {
        
        setBlurValue(e.target.value);
        console.log(e.target.value);

    }

    const handleColor = (e) => {
        
        setColorValue(e.target.value);
        console.log(e.target.value);

    }

    return (
        <div className="csscontainer">
            <h2 className="cssheading">Update CSS Variables with <span  >JS</span></h2>

            <div className="controls">
                <label >Spacing:</label>
                <input id="spacing" type="range" name="spacing" min="10" defaultValue={spaceValue} max="200" onChange={handleSpacing} data-sizing="px"></input>

                <label >Blur:</label>
                <input id="blur" type="range" name="blur" min="0" max="25" defaultValue={blurValue} onChange={handleBlur} data-sizing="px"></input>

                <label >Base Color</label>
                <input id="base" type="color" name="base" defaultValue={colorValue} onChange={handleColor}></input>
            </div>

            <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" className="resImage" alt="css responsive" style={{padding: `${spaceValue}px`, background: `${colorValue}`, filter: `blur(${blurValue}px)
            `}}></img>
        </div>
    )
}

export default CSSVariables;