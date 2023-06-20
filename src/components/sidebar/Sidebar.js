import {
    DownOutlined,
} from "@ant-design/icons";
import sidebarOptions from "./sidebar_options/Options"
import Logotype from '../../images/sidebar/Logotype.svg';
import SampleProfilePicture from '../../images/sidebar/Sample-Profile-Image.png'
import './Sidebar.scss'
import {NavLink} from "react-router-dom";

const Sidebar = ({actions}) => {

    const arrayOfDivsSidebarOptions = sidebarOptions.map(option => {
        return (
            <div className="sidebar-option" key={option.text}>
                {option.image}
                <NavLink
                    exact
                    to={`/dashboard/${option.text.toLowerCase()}`}
                    className={({isActive}) => isActive ? "sidebar-active-link": "sidebar-not-active-link" } >
                    {option.text}
                </NavLink>
            </div>
        )
    })

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
                    <DownOutlined/>
                </div>
            </div>

            <div className="sidebar-options">
                {arrayOfDivsSidebarOptions}
            </div>


        </div>

    );
}

export default Sidebar