import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/debounceHelper";
import { HashLink as Link } from "react-router-hash-link";
import { fallDown as Menu } from "react-burger-menu";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <React.Fragment>
      {/* React hamburger menu */}
      <Menu right>
        <nav className="bm-item-list">
          <a href="/">
            <header id="logo">
              <span className="span-crisome">m</span>ds
              <span className="span-blue">o</span>ma
              <span className="span-crisome">h</span>
            </header>
          </a>
          <ul>
            <li className="bm-item">
              <a href="/">Home</a>
            </li>
            <li className="bm-item">
              <Link smooth to="#about">
                About
              </Link>
            </li>
            <li className="bm-item">
              <Link smooth to="#projects">
                Projects
              </Link>
            </li>
            <li className="bm-item">
              <Link smooth to="#contact">
                Contact
              </Link>
            </li>
            <li className="bm-item">
              <a
                href={"/resume/MeshealSomah_Resume.pdf"}
                id="resume"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
            </li>
          </ul>
        </nav>
      </Menu>
      {/* End of Hambuger Menu */}

      <nav className="nav-bar" style={{ top: visible ? "0px" : "-100px" }}>
        <a href="/">
          <header id="logo">
            <span className="span-crisome">m</span>ds
            <span className="span-blue">o</span>ma
            <span className="span-crisome">h</span>
          </header>
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Link smooth to="#about">
              About
            </Link>
          </li>
          <li>
            <Link smooth to="#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link smooth to="#contact">
              Contact
            </Link>
          </li>
          <li>
            <a
              href={"/resume/MeshealSomah_Resume.pdf"}
              id="resume"
              target="_blank"
              rel="noreferrer"
            >
              Résumé
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
