import {
    DownOutlined,
} from "@ant-design/icons";
import sidebarOptions from "./sidebar_options/SidebarOptions"
import Logotype from '../../images/sidebar/Logotype.svg';
import './Sidebar.scss'
import {NavLink} from "react-router-dom";
import {Dropdown, Space} from "antd";
import {UserInfoOptions} from "./sidebar_options/UserInfoOptions";
import AvatarComponent from "./components/Avatar/Avatar";

const View = ({name, surname}) => {

  const preventDefault = e => e.preventDefault()

    const arrayOfDivsSidebarOptions = sidebarOptions.map(option => {
        if (option.inactive === true)
        {
            return (
                <div className="sidebar-option inactive-sidebar-option" key={option.text}>
                    {option.image}
                    <span>
                        {option.text}
                    </span>
                </div>
            )
        }
        return (
            <div className="sidebar-option" key={option.text}>
                {option.image}
                <NavLink
                    exact="true"
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
                    <AvatarComponent name={`${name} ${surname}`} developerList={[]} />
                </div>
                <div className="user-info-section">
                    <span className="user-name">
                        {name} {surname}
                    </span>
                    <span className="user-role">
                        Admin
                    </span>
                </div>
                <div className="expand-user-info-section">
                    <Dropdown
                        menu={{items: UserInfoOptions}}
                        trigger={['click']}
                    >
                        <a onClick={preventDefault}>
                            <Space>
                                <DownOutlined />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>

            <div className="sidebar-options">
                {arrayOfDivsSidebarOptions}
            </div>


        </div>

    );
}

export default View