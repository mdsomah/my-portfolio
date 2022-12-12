import React from "react";
import MyPortfolios from "./MyPortfolios";
import Section from "./Section";

const Main = () => {
  return (
    <React.Fragment>
      <main className="container">
        <div className="container hero-container">
          <div className="hero-section">
            <div>
              <h3>Hello there! my name is,</h3>
            </div>
            <div>
              <h1>Mesheal D. Somah Sr.</h1>
            </div>
            <div>
              <h2>
                I'm a Full Stack Designer, Developer, Engineer &#38; Architet.
              </h2>
            </div>
            <p>
              I build projects from start to finished! <br />
              You don't need to hire a seperate{" "}
              <strong>
                <mark>Fornt-end</mark>
              </strong>{" "}
              and{" "}
              <strong>
                <mark>Back-end</mark>
              </strong>{" "}
              developer for your project.
              <br />I work on every areas of the{" "}
              <strong>
                <em>Tech Stacks.</em>
              </strong>
            </p>
            <p>
              <strong>
                Ready to turn your amazing ideas into a working product?
              </strong>
            </p>
            <button className="call-to-action">
              <a href="#contact">Contact Me</a>
            </button>
            <div className="explore-more">
              <h5>Not Still Convience?</h5>
              <p>Let Explore</p>
              <i class="bi bi-arrow-down"></i>
            </div>
          </div>
          <div>
            <img src={"/images/mesh.png"} alt="Portfolio" />
          </div>
        </div>
      </main>
      <div className="social-network">
        <i
          class="bi bi-linkedin"
          data-toggle="tooltip"
          data-placement="right"
          title="Linkedin"
        ></i>
        <i
          class="bi bi-facebook"
          data-toggle="tooltip"
          data-placement="right"
          title="Facebook"
        ></i>
        <i
          class="bi bi-twitter"
          data-toggle="tooltip"
          data-placement="right"
          title="Twitter"
        ></i>
        <i
          class="bi bi-github"
          data-toggle="tooltip"
          data-placement="right"
          title="Github"
        ></i>
        <i
          class="bi bi-behance"
          data-toggle="tooltip"
          data-placement="right"
          title="Behance"
        ></i>
      </div>
      <MyPortfolios />
      <Section />
    </React.Fragment>
  );
};

export default Main;
