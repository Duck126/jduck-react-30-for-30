import { useEffect, useState } from "react";
import "../styles/LinkHighlighter.css";

const LinkHighlighter = () => {

    const [spanStyles, setSpanStyles] = useState({})

    useEffect(() => {
        const triggers = document.querySelectorAll('.linkClass');
        triggers.forEach(a => a.addEventListener('mouseenter', (e) => highlightLink(e)));
        return () => {
            triggers.forEach(a => a.removeEventListener('mouseenter', highlightLink));
        }
    },[])


    const highlightLink = (e) => {

        const linkCoords = e.target.getBoundingClientRect();

        const coords = {
            width: linkCoords.width,
            height: linkCoords.height,
            top: linkCoords.top + window.scrollY,
            left: linkCoords.left + window.scrollX
        };

        let newStyles = {
            width: `${coords.width}px`,
            height: `${coords.height}px`,
            top: `${coords.top}px`,
            left: `${coords.left}px`
        }

        setSpanStyles(newStyles);

    }

    return (
        <div className="highlightContainer">
            <span className="highlight" style={{ height: `${spanStyles.height}`, width: `${spanStyles.width}`, transform: `translate(${spanStyles.left}, ${spanStyles.top})` }}></span>
            <nav className="highlightNav">
                <ul className="menu">
                    <li><button className="linkClass" href="#">Home</button></li>
                    <li><button className="linkClass" href="#">Order Status</button></li>
                    <li><button className="linkClass" href="#">Tweets</button></li>
                    <li><button className="linkClass" href="#">Read Our History</button></li>
                    <li><button className="linkClass" href="#">Contact Us</button></li>
                </ul>
            </nav>
            <div className="highlightwrapper">
                <p>Lorem ipsum dolor sit amet, <button className="linkClass" href="#">consectetur</button> adipisicing elit. Est <button className="linkClass" href="#">explicabo</button> unde natus necessitatibus esse obcaecati distinctio, aut itaque, qui vitae!</p>
                <p>Aspernatur sapiente quae sint <button className="linkClass" href="#">soluta</button> modi, atque praesentium laborum pariatur earum <button className="linkClass" href="#">quaerat</button> cupiditate consequuntur facilis ullam dignissimos, aperiam quam veniam.</p>
                <p>Cum ipsam quod, incidunt sit ex <button className="linkClass" href="#">tempore</button> placeat maxime <button className="linkClass" href="#">corrupti</button> possimus <button className="linkClass" href="#">veritatis</button> ipsum fugit recusandae est doloremque? Hic, <button className="linkClass" href="#">quibusdam</button>, nulla.</p>
                <p>Esse quibusdam, ad, ducimus cupiditate <button className="linkClass" href="#">nulla</button>, quae magni odit <button className="linkClass" href="#">totam</button> ut consequatur eveniet sunt quam provident sapiente dicta neque quod.</p>
                <p>Aliquam <button className="linkClass" href="#">dicta</button> sequi culpa fugiat <button className="linkClass" href="#">consequuntur</button> pariatur optio ad minima, maxime <button className="linkClass" href="#">odio</button>, distinctio magni impedit tempore enim repellendus <button className="linkClass" href="#">repudiandae</button> quas!</p>
            </div>
        </div>
    )
}

export default LinkHighlighter;