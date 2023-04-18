import React, { useCallback } from "react";
import Footer from "../../components/Footer/Footer";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="home">
      <Particles
        className="home__canvas"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff",
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 0.1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 120,
            },
            opacity: {
              value: 0.4,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
          },
          detectRetina: false,
        }}
      />
      <div className="home__hero">
        <div className="home__hero--info">
          <h2 className="home__hero--info-title">
            Hi, my name is{" "}
            <span className="home__hero--info-title-name">Juan Linero</span>
            <br />
            I'm a{" "}
            <span className="home__hero--info-title-position">
              Developer
            </span>{" "}
          </h2>
          <div className="home__hero--info-text">
            <div className="static-text">
              <pre>I'm a </pre>
            </div>
            <ul className="dynamic-text">
              <li>
                <span>Front-end Developer</span>
              </li>
              <li>
                <span>User Interface Designer</span>
              </li>
              <li>
                <span>Database Developer</span>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="home__hero-img"
          src="https://wallpapercave.com/wp/wp9109580.jpg"
          alt="A man working in a program"
        />
      </div>
      <div className="home__presentation">
        <h2>
          Who <span className="home__presentation-title">I Am</span>
        </h2>
        <p className="home__presentation-p">
          Programming has always been a source of joy and satisfaction for me.
          There's something about{" "}
          <span className="highligh-text">
            writing code and solving problems
          </span>{" "}
          that fills me with a sense of satisfaction. I do really enjoy working
          in the areas of web development.
        </p>
        <p className="home__presentation-p">
          When it comes to web development, I am proficient in several
          languages, including:{" "}
          <span className="highligh-text">CSS, JavaScript, PHP, and MySQL</span>
          . I have also worked with different frameworks like{" "}
          <span className="highligh-text">
            Bootstrap, Node, SASS and React.{" "}
          </span>
          I really enjoy working with frameworks, it makes things a lot easier
          or more organized overall, I usually use frameworks more than pure
          language.
        </p>
        <p className="home__presentation-p">
          However, my main interest and the area I plan in studying in the long
          term is: <span className="highligh-text">​​machine learning</span>. I
          find the idea of ​​teaching computers to learn and make their own
          decisions very interesting, and I'm excited to start studying
          information technology in college soon.
        </p>
      </div>
      <div className="home__contact">
        <h2 className="home__contact-title">
          Get In <span>Touch With Me</span>
        </h2>
        <h6 className="home__contact-subtitle">
          Don't <span>hesitate</span> to get in touch
        </h6>
        <ul className="home__contact--list">
          <li className="home__contact--list-item">
            <a href="https://github.com/JuanLinero1">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li className="home__contact--list-item">
            <a href="linkedin.com/in/juan-linero-99b714221">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
