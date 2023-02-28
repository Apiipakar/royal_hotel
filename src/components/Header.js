import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const [sobax, setSobax] = useState("auto");
  const [show, setShow] = useState("-0");
  const handleMenu = () => {
    let media = window.matchMedia("(max-width: 576px)");
    if (media.matches && show === "0" && sobax === "none") {
      setShow("230px");
      setSobax("flex");
    } else {
      setShow("0");
      setSobax("none");
    }
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <h2>
            R<span>oyal</span>
            <span className="red-color-text">Hotel</span>
            <i className="fa-solid fa-check"></i>
          </h2>
        </div>

        <ul style={{ height: show }}>
          <li style={{ display: sobax }}>
            <NavLink to="/">Home</NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li style={{ display: sobax }}>
            <NavLink to="/Service">service</NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li style={{ display: sobax }}>
            <NavLink to="/Application">Application</NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li style={{ display: sobax }}>
            <NavLink to="/Contact">Contact</NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li style={{ display: sobax }}>
            <NavLink to="/About">About</NavLink>
            <i className="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <i class="fa-solid fa-moon"></i>
          </li>
        </ul>

        <div className="menu_bar" onClick={handleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};
