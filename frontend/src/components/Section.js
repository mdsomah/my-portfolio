import React from "react";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <React.Fragment>
      <section id="about" className="container">
        <h1>
          <span className="span-crisome">A</span>bo
          <span className="span-blue">u</span>t M
          <span className="span-crisome">e</span>
        </h1>
        <div className="about-paragraph">
          <p>
            I'm a Self Taught Full Stack Designer, Developer, Engineer and
            Architect. I love building amazing products with focus around
            User-Center Design (UCD) and accessibilty.
          </p>
          <h5>My Skills</h5>
          <p>
            HTML5, CSS3, JavaScript ES6+, Bootstrap, React.Js, Node.Js,
            Express.Js, MongoDB, SQL
          </p>
          <p>
            Also I'm a Information technology professional with more than 7
            years of experience in IT administration, project management, and
            network operations with implementation and support for direct
            business objectives. A motivated and creative self-starter,
            persistent in problem solving with resourcefulness to business needs
            and expectations.
          </p>
        </div>
      </section>
      <section id="projects">
        <h1>
          <span className="span-crisome">P</span>ro
          <span className="span-blue">j</span>ect
          <span className="span-crisome">s</span>
        </h1>
        <p>
          Here are few of my projects both personal and for clients. All of my
          personal projects have a link for images slider preview, live preview{" "}
          <br /> and source code are available on Github as open source. Please
          note that put my clients work before myself and project are usually
          communicated <br />
          before posting it on my portfoilio.
        </p>
        <div className="container projects-wrapper">
          <div className="card">
            <img
              src={"/images/clients-portfolio-img/mesheal-somah-dashboard.png"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">NIR Statistic WebApp</h5>
              <p className="card-text">
                A real-time Statistics Web App use for collecting both enrollment and geospatial data......
              </p>
              <Link to="/clients-projects" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src={"/images/portfolio-img/code6.jpg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/personal-projects" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
          <div className="card">
            <img
              src={"/images/portfolio-img/code6.jpg"}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="/clients-projects" className="btn btn-primary">
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <Link to="/all-projects" className="load-more">
          <button>Browse All</button>
        </Link>
      </section>
      <section className="testimonials">
        <div className="testimonials-items">
          <div className="testimonials-content">
            <h1>
              <span className="span-crisome">T</span>es
              <span className="span-blue">t</span>imonial
              <span className="span-crisome">s</span>
            </h1>
            <p>
              Here are what my clients are saying about me. Through all the
              project <br />
              stages my client get involves still the end of the project.
            </p>
          </div>
          <div className="testimonials-images">
            <div>
              <i id="bi-1" class="bi bi-quote"></i>
              <img src={"/images/testimonials/testimonial-1.jpg"} alt="" />
              <h3>Mesheal Somah</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quisquam eaque veritatis debitis quod incidunt quidem minus{" "}
                <br />
                exercitationem, dolorum facere ut?
              </p>
              <i id="bi-2" class="bi bi-quote"></i>
            </div>
            <div>
              <i id="bi-1" class="bi bi-quote"></i>
              <img src={"/images/testimonials/testimonial-1.jpg"} alt="" />
              <h3>Mesheal Somah</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quisquam eaque veritatis debitis quod incidunt quidem minus{" "}
                <br />
                exercitationem, dolorum facere ut?
              </p>
              <i id="bi-2" class="bi bi-quote"></i>
            </div>
            <div>
              <i id="bi-1" class="bi bi-quote"></i>
              <img src={"/images/testimonials/testimonial-1.jpg"} alt="" />
              <h3>Mesheal Somah</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quisquam eaque veritatis debitis quod incidunt quidem minus{" "}
                <br />
                exercitationem, dolorum facere ut?
              </p>
              <i id="bi-2" class="bi bi-quote"></i>
            </div>
            <div>
              <i id="bi-1" class="bi bi-quote"></i>
              <img src={"/images/testimonials/testimonial-1.jpg"} alt="" />
              <h3>Mesheal Somah</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Quisquam eaque veritatis debitis quod incidunt quidem minus{" "}
                <br />
                exercitationem, dolorum facere ut?
              </p>
              <i id="bi-2" class="bi bi-quote"></i>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact-section-title">
          <h1>
            <span className="span-crisome">L</span>et
            <span className="span-blue"> G</span>et in Touc
            <span className="span-crisome">h</span>
          </h1>
          <p>
            Please fill out the form and send me any message and <br /> I will
            get back to you as soon a possible to dicuss your concern <br /> and
            established good working relationship to turn your <br /> amazing
            ideas into a working product.
          </p>
        </div>
        <form action="/contact.js" method="POST" className="form-group">
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Full Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type Message"
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Section;
