import { useEffect, useRef } from "react";
import "../styles/ClickDrag.css";

const ClickDrag = () => {

    const sliderRef = useRef(null);
    let isDown = false;
    let startX;
    let scrollLeft;

    useEffect(() => {
        const slider = sliderRef.current;

        slider.addEventListener('mousedown', (e) => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            isDown = true;
            slider.classList.add('active');
            // eslint-disable-next-line react-hooks/exhaustive-deps
            startX = e.pageX - slider.offsetLeft;
            // eslint-disable-next-line react-hooks/exhaustive-deps
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;  // stop the fn from running
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
        });
    })

    return (
        <div className="dragContainer">
            <div className="items" ref={sliderRef}>
                <div className="item item1">01</div>
                <div className="item item2">02</div>
                <div className="item item3">03</div>
                <div className="item item4">04</div>
                <div className="item item5">05</div>
                <div className="item item6">06</div>
                <div className="item item7">07</div>
                <div className="item item8">08</div>
                <div className="item item9">09</div>
                <div className="item item10">10</div>
                <div className="item item11">11</div>
                <div className="item item12">12</div>
                <div className="item item13">13</div>
                <div className="item item14">14</div>
                <div className="item item15">15</div>
                <div className="item item16">16</div>
                <div className="item item17">17</div>
                <div className="item item18">18</div>
                <div className="item item19">19</div>
                <div className="item item20">20</div>
                <div className="item item21">21</div>
                <div className="item item22">22</div>
                <div className="item item23">23</div>
                <div className="item item24">24</div>
                <div className="item item25">25</div>
            </div>
        </div>
    )
}

export default ClickDrag;