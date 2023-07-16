import React from 'react';
import {Avatar, Popover} from 'antd';

const AvatarComponent = ({name}) => {
    const generateColor = (name) => {
        let hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        const color = (hash & 0x00ffffff).toString(16).toUpperCase();
        const darkColor = '#' + ('00000'.substring(0, 6 - color.length) + color);
        return darkenColor(darkColor, 20);
    };

    const darkenColor = (color, percent) => {
        const num = parseInt(color.slice(1), 16);
        const amt = Math.round(2.55 * percent);
        const R = (num >> 16) - amt;
        const G = (num >> 8 & 0x00FF) - amt;
        const B = (num & 0x0000FF) - amt;
        const newColor = "#" + (0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1);
        return newColor;
    };

    const renderAvatar = (name, color) => {
        const initials = name
            .split(' ')
            .map((word) => word[0])
            .join('');
        return (
            <Avatar
                shape="square"
                className=""
                style={{
                    backgroundColor: color,
                }}
                size={54}
            >
                {initials}
            </Avatar>
        );
    };

    const renderDeveloperAvatar = (developer, developers) => {
        const color = generateColor(developer);
        return (
            <span className="sidebar-avatar-container">
          {renderAvatar(developer, color)}
      </span>
        );
    };

    const developerArray = String(name).split(', ');

    return (
        <div className="sidebar-avatar-container">
            {developerArray.slice(0, 3).map((developer) =>
                renderDeveloperAvatar(developer, developerArray)
            )}
        </div>
    );
};

export default AvatarComponent;