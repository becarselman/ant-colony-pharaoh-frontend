import './Sidebar.scss'
import Logotype from '../../images/sidebar/Logotype.svg';
import SampleProfilePicture from '../../images/sidebar/Sample-Profile-Image.png'
import { useEffect, useState } from "react";
import {
  AuditOutlined,
  DownOutlined,
  HomeOutlined,
  ProjectOutlined,
  SnippetsOutlined,
  TeamOutlined,
  WalletOutlined
} from "@ant-design/icons";

function Sidebar({ actions }) {

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
        <div className="sidebar-option">
          <HomeOutlined />
          <p>Home</p>
        </div>
        <div className="sidebar-option">
          <ProjectOutlined />
          <p>Projects</p>
        </div>
        <div className="sidebar-option">
          <TeamOutlined />
          <p>Employees</p>
        </div>
        <div className="sidebar-option">
          <WalletOutlined />
          <p>Financial Overview</p>
        </div>
        <div className="sidebar-option">
          <SnippetsOutlined />
          <p>Project Reporting</p>
        </div>
        <div className="sidebar-option">
          <AuditOutlined />
          <p>Invoicing</p>
        </div>
      </div>
    </div>

  );
}

export default Sidebar