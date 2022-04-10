import React from "react";

export default function Post() {
  return (
    <div className="wrapper">
      <h2>OpenSpace | Master Thesis</h2>
      <div className="images slider">
        <div className="widthImg">
          <img src="os.png" alt="os" />
        </div>
        <div className="widthImg">
          <img src="1.png" alt="os1" />
        </div>
        <div className="widthImg">
          <img src="2.png" alt="os2" />
        </div>
        <div className="widthImg">
          <img src="3.png" alt="os3" />
        </div>
        <div className="widthImg">
          <img src="4.png" alt="os4" />
        </div>
        <div className="widthImg">
          <img src="5.png" alt="os5" />
        </div>
      </div>
      <div className="content">
        <p className="p-skills">
          <i className="fa fa-star" /> C++
          <i className="fa fa-star" /> Python
          <i className="fa fa-star" /> Lua
          <i className="fa fa-star" /> OpenGL
          <i className="fa fa-star" /> Visual Studio
        </p>
        <p className="p-date">
          <i className="fa fa-calendar" /> June 2020 - November 2020
        </p>
        <p className="p-text">
          My master thesis was for
          <a href="https://www.openspaceproject.com/" target="_blank">
            The OpenSpace Project
          </a>
          in collaboration with
          <a href="https://liu.se/" target="_blank">
            Linköping's University
          </a>{" "}
          and
          <a href="https://www.utah.edu/" target="_blank">
            The University of Utah
          </a>
          . Funded in part by NASA, OpenSpace brings the latest techniques from
          data visualization research to the general public. OpenSpace is an
          open-source interactive data visualization software, used partly by
          astronomers. My thesis aimed to create a messaging protocol for
          OpenSpace that can be used by other astronomy software tools to
          interoperate with OpenSpace. My associate and I developed the
          messaging protocol in C++, and to test the protocol a plugin for
          astronomy tool Glue was developed in Python.
        </p>
        <p className="p-text">
          The images above are screenshots I've taken in OpenSpace.
        </p>
        <p className="p-links">
          <a href="https://www.openspaceproject.com/" target="_blank">
            <i className="fa fa-globe" />
          </a>
          <a
            href="https://github.com/OpenSpace/OpenSpace/tree/thesis/2020/software-integration/modules/softwareintegration"
            target="_blank"
          >
            <i className="fa fa-github" />
          </a>
          <a
            href="https://github.com/aniisabihi/glue-openspace-thesis"
            target="_blank"
          >
            <i className="fa fa-github-square" />
          </a>
          <a
            href="https://www.facebook.com/OpenSpaceVisualization"
            target="_blank"
          >
            <i className="fa fa-facebook" />
          </a>
          <a href="https://www.instagram.com/openspaceproj/" target="_blank">
            <i className="fa fa-instagram" />
          </a>
        </p>
      </div>
    </div>
  );
}
