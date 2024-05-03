import NavTop from "./NavTop";
import "./Nav.css";
import churchLogo from "../../assets/images/homlogonew.png";
// import { useState } from "react";

const Header = () => {
  // const [hovered, setIsHovered] = useState(false);

  function dropMenu() {
    const item = document.getElementById("expandable");

    item.classList.add("dropdownAnimate");

    // hovered ? item.classList.add("dropdownAnimate") : null;
  }

  return (
    <header>
      <NavTop />
      <hr className="headerDivide" />
      <nav className="navbar">
        <img src={churchLogo} className="churchLogo" />

        <ul className="menu_list">
          <a href="#">
            {" "}
            <li className="menu_item">Home</li>
          </a>
          <a href="#">
            {" "}
            <li className="menu_item" id="expandable" onMouseOver={dropMenu}>
              About
              <div className="dropdown">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, corporis.
              </div>
            </li>
          </a>
          <a href="#">
            {" "}
            <li className="menu_item">Contact</li>
          </a>
        </ul>

        <i className="bx bx-menu-alt-right menuBt"></i>
      </nav>
    </header>
  );
};

export default Header;
