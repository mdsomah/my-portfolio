import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ClientsProjects = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container clients-portfolio">
        <div className="clients-portfolio-img">
          <h1>
            Startup - Free Responsive Bootstrap 5 HTML5 Business Startup Website
            Template
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            nostrum molestias minus dolores, .clients-portfolio-img mollitia{" "}
            <br />
            earum corporis suscipit nulla iusto alias dignissimos impedit
            deserunt facere laudantium, blanditiis quia eos placeat accusamus.
          </p>
          <img src={"/images/clients-portfolio-img/website2.jpg"} alt="" />
          <div className="clients-portfolio-links">
            <button>
              <i class="bi bi-github"></i>
              <span>Source Code</span>
            </button>
            <button>
              <i class="bi bi-box-arrow-up-right"></i>
              <span>Live Preview</span>
            </button>
          </div>
          <h2>Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            cupiditate eligendi odit veritatis cumque nulla aliquam obcaecati
            voluptas quae illo reprehenderit animi, maiores at natus. Cupiditate
            laborum assumenda perspiciatis distinctio.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            quisquam aut, sapiente aspernatur, itaque autem eveniet accusamus
            distinctio, explicabo ducimus ex. Molestiae quos laboriosam facilis
            accusantium. Possimus consequatur beatae perferendis.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
            laboriosam tempora molestiae, in sequi reprehenderit. Aperiam quo
            voluptatem quod reprehenderit? Temporibus, quae totam alias vero
            nisi quas quaerat quos nesciunt.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis sunt
            tenetur porro, iure, nesciunt nam expedita consequatur delectus et
            molestiae voluptate nisi! Deleniti dicta eos praesentium sapiente
            ipsa quam. Exercitationem!
          </p>
        </div>
        <div className="clients-portfolio-details">
          <h3>Hello World!!!</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, in.
            Soluta ut quaerat tenetur cum dolorum nam <br /> consequatur vitae!
            Amet repellendus consequuntur magni, <br /> dolores et
            necessitatibus obcaecati dignissimos ab ipsam.
          </p>
          <h3>Technology and Feautures</h3>
          <div className="clients-portfolio-details-icons">
            <div>
              <img src={"/images/icons/icon-wp-32.png"} alt="" />
              <span className="clients-portfolio-details-icons-label">
                WordPress
              </span>
            </div>
            <div>
              <img src={"/images/icons/icon-html-32.png"} alt="" />
              <span className="clients-portfolio-details-icons-label">
                HTML5
              </span>
            </div>
            <div>
              <img src={"/images/icons/icon-joomla-32.png"} alt="" />
              <span className="clients-portfolio-details-icons-label">
                Joomla
              </span>
            </div>
            <div>
              <img src={"/images/icons/icon-mac-32.png"} alt="" />
              <span className="clients-portfolio-details-icons-label">
                Mac OS App
              </span>
            </div>
            <div>
              <img src={"/images/icons/icon-online-32.png"} alt="" />
              <span className="clients-portfolio-details-icons-label">
                Online
              </span>
            </div>
            <div>
              <img src={"/images/icons/icon-windows-32.png"} alt="" />
              <span className="clients-portfolio-details-icons-label">
                Windows App
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ClientsProjects;
