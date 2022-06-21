import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About Us",
    url: "#about",
  },

  {
    display: "Courses",
    url: "#courses",
  },
  //  {
  //     display: "Pages",
  //     url: "#",
  //  },
  {
    display: "Blog",
    url: "#footer",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i className="ri-pantone-line"></i> MagicSoft
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
                <li>
                  <div className="nav__item">
                    <a href="https://reg.magicsoft.uz/" target="__blank">
                      <button className="btn">Register Course</button>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="nav__item">
                    <p className="mt-4 d-flex align-items-center">
                      <i className="ri-phone-line"></i> +99894 651-81-41
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i className="ri-phone-line"></i> +99894 651-81-41
              </p>
            </div>
            <div className="nav__right">
              <a href="https://reg.magicsoft.uz/" target="__blank">
                <button className="btn">Register Course</button>
              </a>
            </div> */}
          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
