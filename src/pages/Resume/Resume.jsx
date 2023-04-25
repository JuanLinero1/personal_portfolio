import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  return (
    <div className="resume">
      <a
        href="../../../public/assets/images/CvBonnett.pdf"
        download={"CvBonnett"}
      >
        <button className="resume-button">
          Download <FontAwesomeIcon icon={faDownload} />{" "}
        </button>
      </a>
      <div className="resume__wrapper">
        <iframe src="../../../public/assets/images/CvBonnett.pdf" type="application/pdf"></iframe>
      </div>
    </div>
  );
};

export default Resume;
