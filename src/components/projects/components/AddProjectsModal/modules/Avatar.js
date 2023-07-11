import React from 'react';
import { Avatar, Tooltip } from 'antd';

const AvatarComponent = ({ name,}) => {
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
    const R = ((num >> 16) - amt);
    const G = (((num >> 8) & 0x00FF) - amt);
    const B = ((num & 0x0000FF) - amt);
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
        style={{
          backgroundColor: color,
          backgroundImage: `linear-gradient(to bottom right, ${color}, ${darkenColor(color, 40)})`,
        }}
      >
        {initials}
      </Avatar>
    );
  };

  const renderDeveloperAvatar = (developer, developers) => {
    const color = generateColor(developer);
    return (
      <span className="avatar-container" key={developer}>
        <Tooltip
          title={developers.join(', ')}
          color='black'
          key={developer}
          overlayClassName="popover-class"
          overlayStyle={{ width: 'fit-content', }}
        >
          {renderAvatar(developer, color)}
        </Tooltip>
      </span>
    );
  };

  const renderRemainingDevelopers = (developers) => {
    const remainingCount = developers.length - 3;
    return (
      <span className="avatar-container">
        {remainingCount > 0 && (
          <span className="remaining-developers">{`+${remainingCount}`}</span>
        )}
      </span>
    );
  };

  const developerArray = String(name).split(', ');

  return (
    <div className="avatar-container">
      {developerArray.slice(0, 3).map((developer) =>
        renderDeveloperAvatar(developer, developerArray)
      )}
      {renderRemainingDevelopers(developerArray)}
    </div>
  );
};

export default AvatarComponent;