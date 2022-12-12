import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <hr />
      <div id="footer">
        <div>
          <p>&copy; 2022 Mesheal D. Somah Sr.</p>
          <p>Build with MERN Stack.</p>
          <img src={"/images/icons/mernstack.png"} alt="" width={120} />
        </div>
        <div className="contact-info">
          <div className="address">
            <i class="bi bi-house"></i>
            <p>Address: </p>
            <p>Lapkazee Community, Sinkor</p>
            <p>Monrovia, Liberia</p>
          </div>
          <div className="email">
            <i class="bi bi-envelope-check"></i>
            <p>Email: </p>
            <a href="mailto:domah@gmail.com?Subject=Contact">
              dsomah@gmail.com
            </a>
          </div>
          <div className="telephone">
            <i class="bi bi-telephone-outbound"></i>
            <p>Telephone: </p>
            <p>+231-770442816</p>
            <p>+231-886766156</p>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="social-links footer-social-links">
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
      </div>
      <hr />
    </React.Fragment>
  );
};

export default Footer;
