import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sidebarOptions from "./sidebar_options/Options";
import Logotype from "../../images/sidebar/Logotype.svg";
import SampleProfilePicture from "../../images/sidebar/Sample-Profile-Image.png";
import "./Sidebar.scss";
import { DownOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(getInitialOption());

  function getInitialOption() {
    const storedOption = localStorage.getItem("selectedOption");
    return storedOption || "Home";
  }

  const handleClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem("selectedOption", option);
  };

  const arrayOfDivsSidebarOptions = sidebarOptions.map((option) => {
    const isActive = option.path === location.pathname;
    return (
      <Link
        to={option.path}
        className={`sidebar-option ${isActive ? "active" : ""}`}
        key={option.text}
        onClick={() => handleClick(option.text)}
      >
        {option.image}
        <p>{option.text}</p>
      </Link>
    );
  });

  return (
    <div className="sidebar-container">
      <div className="logo-section">
        <img src={Logotype} className="logo-image" alt="Logo"/>
      </div>

      <div className="user-profile-overview">
        <div className="profile-picture-section">
          <img src={SampleProfilePicture} alt="Profile picture"/>
        </div>
        <div className="user-info-section">
          <p className="user-name">
            Miron Lukač
          </p>
          <p className="user-role">
            Admin
          </p>
        </div>
        <div className="expand-user-info-section">
          <DownOutlined />
        </div>
      </div>

      <div className="sidebar-options">
        {arrayOfDivsSidebarOptions}
      </div>
    </div>

  );
}

export default Sidebar;
