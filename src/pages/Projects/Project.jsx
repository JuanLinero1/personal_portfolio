import React, { useState, useEffect } from "react";
import projects from "../../../public/assets/images/githubProjects";
import tasks from "../../../public/assets/images/githubSmallProjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  return (
    <div className="project">
      <div className="project__hero">
        <h2 className="project__hero-title">Projects I've Built</h2>
        <div className="project__hero--wrapper">
          {projects.map((item, id) => {
            return (
              <div key={id} className="project__hero--container">
                <figure className="project__hero--container-img">
                  <img src={item.photo} alt={item.title} />
                </figure>
                <div className="project__hero--container-info">
                  <h4 className="project__hero--container-info-title">
                    <a target="__blank" href={item.url}>
                      {item.title}
                    </a>
                  </h4>
                  <div className="project__hero--container-info-paragraph">
                    <p>{item.description}</p>
                  </div>
                  <div className="project__hero--container-info-side">
                    <ul className="project__hero--container-info-side-list">
                      {item.technologies.map((item, id) => {
                        return (
                          <li
                            key={id}
                            className="project__hero--container-info-side-list-item"
                          >
                            {item}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="project__task">
        <div className="project__task--wrapper">
          {tasks.slice(0, visible).map((task, id) => {
            return (
              <div key={id} className="project__task--wrapper-card">
                <span className="project__task--wrapper-card-icon">
                  <FontAwesomeIcon icon={faFolderOpen} />
                </span>
                <button className="project__task--wrapper-card-title">
                  <a target="__blank" href={task.url}>
                    {task.title}
                  </a>
                </button>
                <p className="project__task--wrapper-card-description">
                  {task.description}
                </p>
              </div>
            );
          })}
        </div>
      <button onClick={showMoreItems} className="project__task--load-button">
        Load More
      </button>
      </div>
    </div>
  );
};

export default Project;
