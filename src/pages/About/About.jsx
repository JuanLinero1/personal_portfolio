import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import carouselSliderAbout from '../../../public/assets/images/carouselSliderAbout'; 

const About = () => {
  const [currentState, setCurrentState] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      if(currentState === 3){
        setCurrentState(0)
      } else{
        setCurrentState(currentState + 1)
      } 
    }, 4000);
  })

  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__hero--slider">
          {
            carouselSliderAbout.map((imageSlide, currentState) => {
              console.log(imageSlide)
              return <img className="about__hero--slider-img" src={imageSlide.url} alt={imageSlide} />
            })
          }
        </div>  
        <div className="about__hero--info">
          <h2 className="about__hero--info-hg">About Me</h2>
          <br />
          <p>
            Greetings, my name is{" "}
            <span className="about__hero--info-hg">Juan Linero</span> and I'm
            from <span className="about__hero--info-hg">Colombia</span>, where I
            currently reside.
          </p>{" "}
          <br />
          <p>
            I am proficient in both{" "}
            <span className="about__hero--info-hg">Spanish and English</span>,
            and aspire to acquire proficiency in additional languages such as
            German.{" "}
          </p>
          <br />
          <p>
            Despite being{" "}
            <span className="about__hero--info-hg">17 years of age</span>, I
            have invested a considerable amount of time in my education and was
            fortunate enough to be employed by an academy, further enriching my
            knowledge and experience.{" "}
          </p>
          <br />
          <p>
            In the near future, I plan to pursue a{" "}
            <span className="about__hero--info-hg">degree in Data Science</span>{" "}
            as it aligns with my professional objectives.
          </p>
          <br />
          <ul>
            {" "}
            <li>
              {" "}
              <span className="about__hero--info-hg">
                <FontAwesomeIcon icon={faStar} />
              </span>{" "}
              Play Videogames
            </li>
            <li>
              <span className="about__hero--info-hg">
                <FontAwesomeIcon icon={faStar} />
              </span>{" "}
              Reading books
            </li>
            <li>
              <span className="about__hero--info-hg">
                <FontAwesomeIcon icon={faStar} />
              </span>{" "}
              Working out at the gym
            </li>
            <li>
              <span className="about__hero--info-hg">
                <FontAwesomeIcon icon={faStar} />
              </span>{" "}
              Learning new languages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
