import "./Home.css";

import Technologies from "../Technologies/Technologies";
import myPhoto from "../../images/profilepic.png";
import { PiArrowElbowRightDownThin } from "react-icons/pi";
import resume from "../../images/resume.pdf";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  fadeInAnimationVariantsLeft,
  fadeInAnimationVariantsRight,
} from "../../utilities";
import Projects from "../Projects/Projects";

function Home() {
  const [phoebeImage, setPhoebeImage] = useState(false);
  const [getTogetherImage, setGetTogetherImage] = useState(false);
  const [accordImage, setAccordImage] = useState(false);

  const my_text = ["m", "y"];
  const work_text = ["p", "r", "o", "j", "e", "c", "t", "s"];

  return (
    <div className="w-full pb-[100px]">
      <div>
            <section className="about-section">
              <div className="about-me-left">
                <h1 className="about-me">
                  <span>about</span>
                  <br></br>
                  <span className="ml-[20vw]">me</span>
                </h1>
                <div>
                  <img src={myPhoto} className="my-photo" alt="randy-photo" />
                </div>
              </div>
              <div className="about-me-right-side">
                <div className="nav-links">
                  <PiArrowElbowRightDownThin className="text-9xl" />
                  <div className="link-list">
                    <div className="web-portfolio cursor-default">
                      Software-Engineer
                    </div>
                    <a
                      className="web-portfolio underline-animation"
                      href="https://www.linkedin.com/in/randy-hac-4577a71b0/"
                      target="__blank"
                      aria-label="LinkedIn"
                    >
                      Linkedin <FiExternalLink />
                    </a>
                    <a
                      className="web-portfolio underline-animation mx-3"
                      href="https://github.com/randydhack"
                      target="__blank"
                      aria-label="GitHub"
                    >
                      GitHub <FiExternalLink />
                    </a>
                    <a
                      className="web-portfolio underline-animation flex"
                      href={resume}
                      target="__blank"
                      aria-label="Resume"
                    >
                      Resume <FiExternalLink />
                    </a>
                  </div>
                </div>
                <div className="text-center flex items-center">
                  <p className="about-me-description">
                    I have always enjoy creating simple and modernized designs
                    ever since a kid. Majoring in art and studying 3D designing
                    to becoming a software engineer, I do my best in crafting
                    applications that are not only visually appealing but also
                    responsive and efficient.
                  </p>
                </div>
              </div>
            </section>

          <section className="project-section">
            <div className="overflow-hidden">
              <h2 className="my_projects_text">
                <div className="overflow-hidden flex w-full justify-center pb-4">
                  {my_text.map((char, i) => {
                    return (
                      <motion.span
                        key={i}
                        className="my__text"
                        variants={fadeInAnimationVariantsLeft}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, amount: 0.5 }}
                        custom={i}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </div>
                <div className="overflow-hidden flex w-full justify-center pb-4">
                  {work_text.map((char, i) => {
                    return (
                      <motion.span
                        key={i}
                        className="projects__text"
                        variants={fadeInAnimationVariantsRight}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={i}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </div>
              </h2>
            </div>
              <Projects />
          </section>
      </div>

      <Technologies />
      {/* <Contact /> */}

      <div className="bartender-initial">
        <div className="bar-initial"></div>
        <div className="bar-initial"></div>
        <div className="bar-initial"></div>
        <div className="bar-initial"></div>
        <div className="bar-initial"></div>
      </div>
      <div className="bartender">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Home;
