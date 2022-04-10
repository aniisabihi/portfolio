import React from "react";

export default function Skills() {
  return (
    <section
      className="position-absolute d-flex align-items-center justify-content-center text-black bg-blue skills-section"
      data-slideIn="to-top"
    >
      <button
        className="position-absolute skills-close"
        aria-label="Close Skills Section"
      >
        ✕
      </button>
      <div className="d-flex chart-wrapper">
        <ul className="chart-levels">
          <li>Advanced</li>
          <li>Intermediate</li>
          <li>Beginner</li>
          <li>Novice</li>
        </ul>
        <ul className="d-flex justify-content-around align-items-end flex-grow-1 text-center bg-black chart-skills">
          <li className="position-relative bg-blue" data-height="85%">
            <span className="position-absolute w-100">JavaScript</span>
          </li>
          <li className="position-relative bg-blue" data-height="80%">
            <span className="position-absolute w-100">HTML</span>
          </li>
          <li className="position-relative bg-blue" data-height="80%">
            <span className="position-absolute w-100">CSS</span>
          </li>
          <li className="position-relative bg-blue" data-height="80%">
            <span className="position-absolute w-100">C++</span>
          </li>
          <li className="position-relative bg-blue" data-height="75%">
            <span className="position-absolute w-100">Python</span>
          </li>
          <li className="position-relative bg-blue" data-height="75%">
            <span className="position-absolute w-100">WordPress</span>
          </li>
          <li className="position-relative bg-blue" data-height="65%">
            <span className="position-absolute w-100">React Native</span>
          </li>
          <li className="position-relative bg-blue" data-height="65%">
            <span className="position-absolute w-100">Matlab</span>
          </li>
          <li className="position-relative bg-blue" data-height="60%">
            <span className="position-absolute w-100">C#</span>
          </li>
          <li className="position-relative bg-blue" data-height="60%">
            <span className="position-absolute w-100">Java</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
