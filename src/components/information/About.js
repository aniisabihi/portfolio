import React from "react";

export default function About() {
  return (
    <div className="grid-container">
      <div className="aniisa" style="--animation-order: 1;">
        <img src="../../../public/img/aniisa_hi.png" alt="me" />
      </div>
      <div className="about" style="--animation-order: 2;">
        <h1>I'm Aniisa</h1>
        <p>
          {" "}
          I am a driven software developer who wants to develop my already
          acquired knowledge to higher levels. I have studied five years of
          Civil Engineering to obtain a masters in Media Technology. The most
          important thing I have learned from my education is how I can learn
          new things in the best possible way.{" "}
        </p>
        <p>
          {" "}
          Currently, I am mostly interested in Information and Scientific
          Visualization, Web and App Development and general Front End
          Development. My interest in visualization comes from having a hectic
          mind who likes to have and see things in order. With visualization,
          you can perceive information more understandably, especially if UX has
          been in focus. In my free time, I enjoy the company of friends,
          parlour games, food, self-care, documentaries and true crime.{" "}
        </p>
        <p>
          {" "}
          Feel free to check out{" "}
          <a href="../../../public/img/AniisaBihi_CV.pdf" target="_blank">
            my resume
          </a>{" "}
          or contact me below!
        </p>
      </div>
      <div className="contact" style="--animation-order: 3;">
        <h2>Want to know more about me?</h2>
        <div className="container form-top">
          <form
            id="reused_form"
            action="mailto:aniisaaden@gmail.com"
            method="post"
            encType="text/plain"
          >
            <div className="form-group">
              <label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="form-group">
              <label>
                <textarea
                  rows="3"
                  id="subject"
                  name="message"
                  className="form-control"
                  placeholder="Type Your Message.."
                  style="height:100px"
                />
              </label>
            </div>
            <div className="form-right">
              <div className="form-group">
                <input className="submit" type="submit" value="Send" />
              </div>
            </div>
          </form>
          <div
            id="error_message"
            style="width:100%; height:100%; display:none; "
          >
            <h4>Error</h4>
            Sorry there was an error sending your message..
          </div>
          <div
            id="success_message"
            style="width:100%; height:100%; display:none; "
          >
            <h2>
              Success! Your message was sent successfully, I look forward to
              reading it.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
