/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import "../styles/Canvas.css"

const HtmlCanvas = () => {

    const canvasRef = useRef(null);
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let hue = 0;
    let direction = true;

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvasRef.current?.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 100;

        canvas.addEventListener('mousedown', e => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        });

        canvas.addEventListener('mousemove',(e)=> draw(e ,ctx ));
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
    });


    const draw = (e, ctx) => {
        if (!isDrawing) return; // stop the fn from running when they are not moused down

        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.beginPath();
        // start from
        ctx.moveTo(lastX, lastY);
        // go to
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];

        hue++;
        if (hue >= 360) {
            hue = 0;
        }
        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            direction = !direction;
        }

        if (direction) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }

    }


    return (
        <>
            <h1 className="canvasNote">Draw with Mouse!</h1>
            <canvas id="draw" ref={canvasRef}></canvas>
        </>
    )
}

export default HtmlCanvas;