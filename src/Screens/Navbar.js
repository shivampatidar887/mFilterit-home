import React, { useState } from 'react'
import "./Navbar.css";
import {AiOutlineMenu} from "react-icons/ai";
const Navbar = () => {
  const [activeButton, setActiveButton] = useState("Contact Us"); 
  const [menuButton, setMenuButton] = useState(false); 
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const menuhandler = () => {
    setMenuButton(!menuButton);
  };
  return (
    <div className='nav ' >
      <img src={require("../Images/main.png")} alt="image.png" />
      <div id="menu-icon" onClick={menuhandler}><AiOutlineMenu/></div>
      <div className="navitems" id={menuButton === true ? "active-menu" : ""}>
        <button className={activeButton === "Our Solutions" ? "active" : ""}
          onClick={() => handleButtonClick("Our Solutions")}>Our Solutions</button>
        <button className={activeButton === "Resources" ? "active" : ""}
          onClick={() => handleButtonClick("Resources")} >Resources</button>
        <button className={activeButton === "About Us" ? "active" : ""}
          onClick={() => handleButtonClick("About Us")}>About Us</button>
        <button className={activeButton === "Careers" ? "active" : ""}
          onClick={() => handleButtonClick("Careers")}>Careers</button>
        <button className={activeButton === "Contact Us" ? "active" : ""}
          onClick={() => handleButtonClick("Contact Us")}>Contact Us</button>
      </div>
    </div>
  )
}

export default Navbar
