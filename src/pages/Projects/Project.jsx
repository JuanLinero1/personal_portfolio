import React from "react";
import projects from "../../../public/assets/images/githubProjects";

const Project = () => {
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
                    <a target="__blank" href={item.url}>{item.title}</a>
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
    </div>
  );
};

export default Project;
