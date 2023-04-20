import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import carouselSliderAbout from "../../../public/assets/images/carouselSliderAbout";

const About = () => {
  return (
    <div className="about">
      <div className="about__hero">
        <div className="about__hero--slider">
          {carouselSliderAbout.map((image, id) => {
            return (
              <img
                key={id}
                className="about__hero--slider-img"
                src={image.url}
                alt={image.title}
              />
            );
          })}
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
      <div className="about__skills">
        <h2>My Professional <span>SkillSet</span></h2>
        <div className="about__skills--container">
          <span className="about__skills--container-item">
            <i class="devicon-babel-plain"></i>
            <h6 className="about__skills--container-item-title">babel</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-bash-plain"></i>
            <h6 className="about__skills--container-item-title">bash</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-bootstrap-plain"></i>
            <h6 className="about__skills--container-item-title">bootstrap</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-css3-plain"></i>
            <h6 className="about__skills--container-item-title">css3</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-figma-plain"></i>
            <h6 className="about__skills--container-item-title">figma</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-filezilla-plain"></i>
            <h6 className="about__skills--container-item-title">filezilla</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-firebase-plain"></i>
            <h6 className="about__skills--container-item-title">firebase</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-git-plain"></i>
            <h6 className="about__skills--container-item-title">git</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-html5-plain"></i>
            <h6 className="about__skills--container-item-title">html5</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-javascript-plain"></i>
            <h6 className="about__skills--container-item-title">javascript</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-jquery-plain"></i>
            <h6 className="about__skills--container-item-title">jquery</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-linux-plain"></i>
            <h6 className="about__skills--container-item-title">linux</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-nodejs-plain"></i>
            <h6 className="about__skills--container-item-title">nodejs</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-npm-original-wordmark"></i>
            <h6 className="about__skills--container-item-title">npm</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-php-plain"></i>
            <h6 className="about__skills--container-item-title">php</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-react-original"></i>
            <h6 className="about__skills--container-item-title">react</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-redux-original"></i>
            <h6 className="about__skills--container-item-title">redux</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-sass-original"></i>
            <h6 className="about__skills--container-item-title">sass</h6>
          </span>
          <span className="about__skills--container-item">
            <i class="devicon-wordpress-plain"></i>
            <h6 className="about__skills--container-item-title">wordpress</h6>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
