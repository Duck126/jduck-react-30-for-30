import { useEffect, useRef } from "react";
import "../styles/MouseMoveShadow.css";

const MouseMoveShadow = () => {
    const hero = useRef();
    const walk = 500; // 500px
    const text = useRef();

    useEffect(() => {
        hero.current.addEventListener('mousemove', shadow);
        console.clear();
    })

    function shadow(e) {
        const { offsetWidth: width, offsetHeight: height } = hero.current;
        let { offsetX: x, offsetY: y } = e;

        if (this !== e.target) {
            x = x + e.target.offsetLeft;
            y = y + e.target.offsetTop;
        }

        const xWalk = Math.round((x / width * walk) - (walk / 2));
        const yWalk = Math.round((y / height * walk) - (walk / 2));

        text.current.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    }


    return (
        <div className="mouseContainer">
            <div className="hero" ref={hero}>
                <h1 ref={text} contentEditable>🔥WOAH!</h1>
            </div>
        </div>
    )
}

export default MouseMoveShadow;