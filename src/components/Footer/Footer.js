import { easeIn, motion } from "framer-motion";
import "./Footer.css";
import { useEffect } from "react";
import useReadingProgress from "../../hooks/useReadingProgress";
import { Link } from "react-scroll";

function Footer() {
  const completion = useReadingProgress();

  return (
    <motion.footer
      className="footer-section"
      initial={{
        y: 100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 2,
        y: {
          duration: 1,
        },
      }}
    >
      <div
        className="progress-bar"
        style={{ transform: `translateX(${completion - 100}%)` }}
      ></div>
      <div className="footer-left">© 2023 randy portfolio</div>
      <div className="footer-middle cursor-pointer">
        <Link
          to="about-section"
          activeClass="active"
          spy={true}
          className="cursor-pointer"
        >
          About Me
        </Link>{" "}
        <div>|</div>
        <Link
          to="project-section"
          activeClass="active"
          spy={true}
          className="cursor-pointer"
        >
          Projects
        </Link>
        <div>|</div>
        <Link
          to="skill-section"
          activeClass="active"
          spy={true}
          className="cursor-pointer"
        >
          Skills
        </Link>
      </div>
      <div className="footer-right">
        say hi{" "}
        <span className="font-light cursor-pointer">
          — <a href="mailto:randydhacks@gmail.com<" target="_blank" aria-label="email">randydhacks@gmail.com</a>
        </span>
      </div>
      <div className="progress-percentage">
        <span className="font-light cursor-pointer">
          {Math.floor(completion) >= 0 && Math.floor(completion) <= 100 && Math.floor(completion)}%
        </span>
      </div>
    </motion.footer>
  );
}

export default Footer;
