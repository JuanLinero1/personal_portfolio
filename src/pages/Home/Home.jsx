import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

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
      <div className="just-some-emotional-assistance">Amo a Eliana</div>
      <div className="home__hero">
        <div className="home__hero--info">
          <h2 className="home__hero--info-title">
            Hi, my name is{" "}
            <span className="home__hero--info-title-name">Juan Linero</span>
            <br />
            I'm a <span className="home__hero--info-title-position">
            Developer
            </span>{" "}
          </h2>
          <div className="home__hero--info-text">
            <div className="static-text"><pre>I'm a </pre></div>
            <ul className="dynamic-text">
              <li><span>Front-end Developer</span></li>
              <li><span>UI Designer</span></li>
              <li><span>Database Developer</span></li>
            </ul>
          </div>
        </div>
        <img className="home__hero-img" src="https://wallpapercave.com/wp/wp9109580.jpg" alt="A man working in a program" />
      </div>
      <div className="home__presentation">
        <h2>Who <span className="home__presentation-title">I Am</span></h2>
        <p>
          
        </p>

      </div>
    </div>
  );
};

export default Home;
