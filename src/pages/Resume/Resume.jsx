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
      <embed src="../../../public/assets/images/CvBonnett.pdf" type="application/pdf" width="608px" height="857px"></embed>
    </div>
  );
};

export default Resume;
