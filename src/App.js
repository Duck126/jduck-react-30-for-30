import React, { useState } from "react";
import {
  BrowserRouter as Router, Link, Route, Switch
} from "react-router-dom";
import ArrayMethods from "./pages/ArrayMethods";
import ArrayMethodsTwo from "./pages/ArrayMethodsTwo";
import CheckBoxes from "./pages/CheckBoxes";
import Clock from './pages/Clock';
import ConsoleLog from "./pages/ConsoleLog";
import CSSVariables from "./pages/CSSVariables";
import DrumKit from "./pages/DrumKit";
import FlexPanels from "./pages/FlexPanels";
import HtmlCanvas from "./pages/HtmlCanvas";
import KeySequence from "./pages/KeySequence";
import LocalStorage from "./pages/LocalStorage";
import MouseMoveShadow from "./pages/MouseMoveShadow";
import ReduceTimes from "./pages/ReduceTimes";
import RefvsCopy from "./pages/RefvsCopy";
import SlideScroll from "./pages/SlideScroll";
import SortWithoutArticles from "./pages/SortWithoutArticles";
import TypeAhead from "./pages/TypeAhead";
import VideoPlayer from "./pages/VideoPlayer";
import WebCamFun from "./pages/WebCamFun";
import SpeechDetection from "./pages/SpeechDetection";
import Geolocation from "./pages/Geolocation";
import LinkHighlighter from "./pages/LinkHighlighter";
import SpeechSynth from "./pages/SpeechSynth";
import StickyNav from "./pages/StickyNav";
import EventCapture from "./pages/EventCapture";
import StripeNav from "./pages/StripeNav";
import ClickDrag from "./pages/ClickDrag";
import VideoSpeed from "./pages/VideoSpeed";
import CountDown from "./pages/CountDown";
import WhackaMole from "./pages/WhackaMole";
import Home from "./pages/Home";

function App() {

  const [active, setActive] = useState(false);

  const showNav = () => setActive(!active);

  return (
    <div className="homeContainer">
      <h2 className='mainHeading'>React JS 30 for 30</h2>
      <Router>
        <span className='dropdownItem' onClick={showNav}><h3 className='subHeading'>Projects {active ? '⟰' : '⟱'}</h3></span>
        <nav className={active ? `navbarActive` : `navbar`}>
          <ul className={active ? `navListActive` : `navList`}>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/">Home</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/DrumKit">Drum Kit</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/Clock">Clock</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/CSSVariables">CSS Variables</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/ArrayMethods">Array Methods</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/FlexPanels">Flex Panels</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/TypeAhead">TypeAhead</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/ArrayMethodsTwo">Array Methods Two</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/HtmlCanvas">HTML Canvas</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/ConsoleLog">Console Log Tricks</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/CheckBoxes">Check Boxes</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/VideoPlayer">VideoPlayer</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/KeySequence">KeySequence</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/SlideScroll">SlideScroll</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/RefvsCopy">Ref vs Copy</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/LocalStorage">Local Storage</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/MouseMoveShadow">Mouse Move Shadow</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/SortWithoutArticles">Sort Without Articles</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/ReduceTimes">Reduce Times</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/WebCamFun">WebCam Fun</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/SpeechDetection">Speech Detection</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/Geolocation">Geolocation</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/LinkHighlighter">Link Highlighter</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/SpeechSynth">Speech Synthesis</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/StickyNav">Sticky Nav</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/EventCapture">Event Capture</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/StripeNav">Stripe Nav</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/ClickDrag">Click and Drag</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/VideoSpeed">Video Speed</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/CountDown">Countdown Timer</Link>
            </li>
            <li className={active ? `navItem` : `navItemInactive`}>
              <Link className='navLink' to="/WhackaMole">Whack A Mole</Link>
            </li>

          </ul>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/DrumKit">
            <DrumKit />
          </Route>
          <Route path="/Clock">
            <Clock />
          </Route>
          <Route path="/CSSVariables">
            <CSSVariables />
          </Route>
          <Route path="/ArrayMethods">
            <ArrayMethods />
          </Route>
          <Route path="/FlexPanels">
            <FlexPanels />
          </Route>
          <Route path="/TypeAhead">
            <TypeAhead />
          </Route>
          <Route path="/ArrayMethodsTwo">
            <ArrayMethodsTwo />
          </Route>
          <Route path="/HtmlCanvas">
            <HtmlCanvas />
          </Route>
          <Route path="/ConsoleLog">
            <ConsoleLog />
          </Route>
          <Route path="/CheckBoxes">
            <CheckBoxes />
          </Route>
          <Route path="/VideoPlayer">
            <VideoPlayer />
          </Route>
          <Route path="/KeySequence">
            <KeySequence />
          </Route>
          <Route path="/SlideScroll">
            <SlideScroll />
          </Route>
          <Route path="/RefvsCopy">
            <RefvsCopy />
          </Route>
          <Route path="/LocalStorage">
            <LocalStorage />
          </Route>
          <Route path="/MouseMoveShadow">
            <MouseMoveShadow />
          </Route>
          <Route path="/SortWithoutArticles">
            <SortWithoutArticles />
          </Route>
          <Route path="/ReduceTimes">
            <ReduceTimes />
          </Route>
          <Route path="/WebCamFun">
            <WebCamFun />
          </Route>
          <Route path="/SpeechDetection">
            <SpeechDetection />
          </Route>
          <Route path="/Geolocation">
            <Geolocation />
          </Route>
          <Route path="/LinkHighlighter">
            <LinkHighlighter />
          </Route>
          <Route path="/SpeechSynth">
            <SpeechSynth />
          </Route>
          <Route path="/StickyNav">
            <StickyNav />
          </Route>
          <Route path="/EventCapture">
            <EventCapture />
          </Route>
          <Route path="/StripeNav">
            <StripeNav />
          </Route>
          <Route path="/ClickDrag">
            <ClickDrag />
          </Route>
          <Route path="/VideoSpeed">
            <VideoSpeed />
          </Route>
          <Route path="/CountDown">
            <CountDown />
          </Route>
          <Route path="/WhackaMole">
            <WhackaMole />
          </Route>

        </Switch>

      </Router>
    </div>
  );
}

export default App;
