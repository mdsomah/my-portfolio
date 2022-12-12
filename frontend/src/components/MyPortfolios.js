import React, { useState, useEffect } from "react";
import HorizontalScroll from "react-scroll-horizontal";

// import "./MyPortfolios.css";

const MyPortfolios = () => {
  const [scrolled, setScrolled] = useState(0);

  useEffect(() => {
    const handleScroll = (e) => {
      if (window.deltaX > 0) {
        setScrolled(window.deltaY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <section className="section-wrapper">
        <HorizontalScroll
          reverseScroll={true}
          animValues={-100}
          onScroll={scrolled}
        >
          {/* Designer Container */}
          <div className="section-wrapper-main">
            <div className="section-wrapper-title">
              <h5>WHAT I DO:</h5>
              <h1>
                <span className="span-crisome">A</span>s D
                <span className="span-blue">e</span>signe
                <span className="span-crisome">r</span>
              </h1>
              <p>
                I conduct research of product, create Wireframe and
                High-Fidelity Mockups, User Experience Design (UX), User
                Interface Design (UI), Visual Design, and Product Design using
                tools like; Figma, Sketch, Adobe XD (Experience Design) and
                Adobe ID (Illustrator Design).
              </p>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
            </div>
            <div className="section-wrapper-img">
              <img src={"/images/portfolio-img/dada.png"} alt="" height={500} />
            </div>
          </div>
          {/* End of Designer Container */}

          {/* Developer Container */}
          <div className="section-wrapper-main">
            <div className="section-wrapper-title">
              <h5>WHAT I DO:</h5>
              <h1>
                <span className="span-crisome">A</span>s D
                <span className="span-blue">e</span>velope
                <span className="span-crisome">r</span>
              </h1>
              <p>
                I conduct research of product, create Wireframe and
                High-Fidelity Mockups, User Experience Design (UX), User
                Interface Design (UI), Visual Design, and Product Design using
                tools like; Figma, Sketch, Adobe XD (Experience Design) and
                Adobe ID (Illustrator Design).
              </p>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
            </div>
            <div className="section-wrapper-img">
              <img
                src={"/images/portfolio-img/code5.jpg"}
                alt=""
                height={500}
              />
            </div>
          </div>
          {/* End of Developer Container */}

          {/* Engineer Container */}
          <div className="section-wrapper-main">
            <div className="section-wrapper-title">
              <h5>WHAT I DO:</h5>
              <h1>
                <span className="span-crisome">A</span>s E
                <span className="span-blue">n</span>ginee
                <span className="span-crisome">r</span>
              </h1>
              <p>
                I conduct research of product, create Wireframe and
                High-Fidelity Mockups, User Experience Design (UX), User
                Interface Design (UI), Visual Design, and Product Design using
                tools like; Figma, Sketch, Adobe XD (Experience Design) and
                Adobe ID (Illustrator Design).
              </p>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
            </div>
            <div className="section-wrapper-img">
              <img
                src={"/images/portfolio-img/code6.jpg"}
                alt=""
                height={500}
              />
            </div>
          </div>
          {/* End of Engineer Container */}

          {/* Architect Container */}
          <div className="section-wrapper-main">
            <div className="section-wrapper-title">
              <h5>WHAT I DO:</h5>
              <h1>
                <span className="span-crisome">A</span>s A
                <span className="span-blue">r</span>chitec
                <span className="span-crisome">t</span>
              </h1>
              <p>
                I conduct research of product, create Wireframe and
                High-Fidelity Mockups, User Experience Design (UX), User
                Interface Design (UI), Visual Design, and Product Design using
                tools like; Figma, Sketch, Adobe XD (Experience Design) and
                Adobe ID (Illustrator Design).
              </p>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
              <i class="bi bi-circle-fill"></i>
            </div>
            <div className="section-wrapper-img">
              <img
                src={"/images/portfolio-img/code8.jpg"}
                alt=""
                height={500}
              />
            </div>
          </div>
          {/* End of Architect Container */}
        </HorizontalScroll>
      </section>

      {/* <section className="section-wrapper">
        <div className="section-wrapper-main">
          <div className="section-wrapper-title">
            <h5>WHAT I DO:</h5>
            <h1>
              <span className="span-crisome">A</span>s D
              <span className="span-blue">e</span>sine
              <span className="span-crisome">r</span>
            </h1>
            <p>
              I conduct research of product, create Wireframe and High-Fidelity
              Mockups, User Experience Design (UX), User Interface Design (UI),
              Visual Design, and Product Design using tools like; Figma, Sketch,
              Adobe XD (Experience Design) and Adobe ID (Illustrator Design).
            </p>
            <i class="bi bi-circle-fill"></i>
            <i class="bi bi-circle-fill"></i>
            <i class="bi bi-circle-fill"></i>
            <i class="bi bi-circle-fill"></i>
          </div>
          <HorizontalScroll reverseScroll={true} pageLock={true} animValues={1}>
            <div className="section-wrapper-img">
              <img src={"/images/portfolio-img/dada.png"} alt="" height={500} />
            </div>
            <div className="section-wrapper-img">
              <img src={"/images/portfolio-img/dada.png"} alt="" height={500} />
            </div>
            <div className="section-wrapper-img">
              <img src={"/images/portfolio-img/dada.png"} alt="" height={500} />
            </div>
          </HorizontalScroll>
        </div>
      </section> */}
    </React.Fragment>
  );
};

export default MyPortfolios;
