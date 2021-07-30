import { useEffect, useState } from "react";
import "../styles/StripeNav.css";

const StripeNav = () => {

    // eslint-disable-next-line no-unused-vars
    const [isLoaded, setLoaded] = useState(false);
    const triggers = document.querySelectorAll('.cool > li');
    const background = document.querySelector('.dropdownBackground');
    const nav = document.querySelector('.top');

    useEffect(() => {
        triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
        triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

    })

    function handleEnter() {
        this.classList.add('trigger-enter');
        setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
        background.classList.add('open');

        const dropdown = this.querySelector('.dropdown');
        const dropdownCoords = dropdown.getBoundingClientRect();
        const navCoords = nav.getBoundingClientRect();

        const coords = {
            height: dropdownCoords.height,
            width: dropdownCoords.width,
            top: dropdownCoords.top - navCoords.top,
            left: dropdownCoords.left - navCoords.left
        };

        background.style.setProperty('width', `${coords.width}px`);
        background.style.setProperty('height', `${coords.height}px`);
        background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    }

    function handleLeave() {
        this.classList.remove('trigger-enter', 'trigger-enter-active');
        background.classList.remove('open');
    }



    return (
        <div className="stripeNavContainer">
            <h2 className="stripeNavHeading">Cool</h2>
            <nav className="top">
                <div className="dropdownBackground">
                    <span className="arrow"></span>
                </div>

                <ul className="cool">
                    <li>
                        <button className='stripeButton' href="#">About Me</button>
                        <div className="dropdown dropdown1">
                            <div className="bio">
                                <img src="https://logo.clearbit.com/wesbos.com" alt="" onLoad={() => setLoaded(true)}></img>
                                <p>Wes Bos sure does love web development. He teaches things like JavaScript, CSS and BBQ. Wait. BBQ isn't part of web development. It should be though!</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <button href="#" className='stripeButton'>Courses</button>
                        <ul className="dropdown courses">
                            <li>
                                <span className="code">RFB</span>
                                <a href="https://ReactForBeginners.com"> - React For Beginners</a>
                            </li>
                            <li>
                                <span className="code">ES6</span>
                                <a href="https://ES6.io"> - ES6 For Everyone</a>
                            </li>
                            <li>
                                <span className="code">NODE</span>
                                <a href="https://LearnNode.com"> - Learn Node</a>
                            </li>
                            <li>
                                <span className="code">STPU</span>
                                <a href="https://SublimeTextBook.com"> - Sublime Text Power User</a>
                            </li>
                            <li>
                                <span className="code">WTF</span>
                                <a href="http://Flexbox.io"> - What The Flexbox?!</a>
                            </li>
                            <li>
                                <span className="code">GRID</span>
                                <a href="https://CSSGrid.io"> - CSS Grid</a>
                            </li>
                            <li>
                                <span className="code">LRX</span>
                                <a href="http://LearnRedux.com"> - Learn Redux</a>
                            </li>
                            <li>
                                <span className="code">CLPU</span>
                                <a href="http://CommandLinePowerUser.com"> - Command Line Power User</a>
                            </li>
                            <li>
                                <span className="code">MMD</span>
                                <a href="http://MasteringMarkdown.com"> - Mastering Markdown</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button href="#" className='stripeButton'>Other Links</button>
                        <ul className="dropdown dropdown3">
                            <li><a className="button" href="http://twitter.com/wesbos">Twitter</a></li>
                            <li><a className="button" href="http://facebook.com/wesbos.developer">Facebook</a></li>
                            <li><a className="button" href="http://wesbos.com">Blog</a></li>
                            <li><a className="button" href="http://wesbos.com/courses">Course Catalog</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default StripeNav;