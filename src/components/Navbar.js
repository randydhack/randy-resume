import moment from "moment";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {

  const [currentTime, setCurrentTime] = useState(moment().format('h:mm A'));

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('h:mm A'));
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const bars = document.querySelectorAll(".bar-nav");
  //   bars.forEach((bar, i) => {
  //     bar.style.animationPlayState = "running";
  //   });

  //   const lastBar = bars[bars.length - 1];
  //   lastBar.addEventListener("animationend", () => {
  //     setTimeout(() => {
  //       window.location = e.target.href;
  //     }, 500);
  //   });
  // };

  return (
    <nav className="navbar">
      <NavLink className="randyhac" to="/" aria-label="HomePage">
        randy hac
      </NavLink>
      <div className="clock">{currentTime}</div>
      <div className="email">
        say hi{" "}
        <span className="font-light cursor-pointer">
          —{" "}
          <a
            href="mailto:randydhacks@gmail.com"
            aria-label="Email"
            target="_blank"
          >
            randydhacks@gmail.com
          </a>
        </span>
      </div>
      <div className="bartender-nav">
        <div className="bar-nav"></div>
        <div className="bar-nav"></div>
        <div className="bar-nav"></div>
        <div className="bar-nav"></div>
        <div className="bar-nav"></div>
      </div>
    </nav>
  );
}

export default Navbar;
