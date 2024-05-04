import NavTop from "./NavTop";
import "./Nav.css";
import churchLogo from "../../assets/images/homlogonew.png";

// import { useState } from "react";

const Header = () => {
  // const [hovered, setIsHovered] = useState(false);
  function dropMenu() {
    const MenuWindow = document.querySelector(".menu_window");

    MenuWindow.classList.toggle("menu_slide");
    MenuWindow.style.backgroundColor = "#d39103";
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
            <li className="menu_item">About</li>
          </a>
          <a href="#">
            {" "}
            <li className="menu_item">Contact</li>
          </a>
        </ul>

        <i className="bx bx-menu-alt-right menuBt" onClick={dropMenu}></i>
      </nav>
    </header>
  );
};

export default Header;
