import {Navigate, useNavigate} from "react-router-dom";
import "./NotFound.scss"
import antImage from "../../images/custom404/ant.png";
import antLogo from "../../images/custom404/antlogo.png";


export const NotFound = () => {
  const navigate = useNavigate()

  const redirectClick = () => {
    navigate(-1)
  }

  return (
    
    <div className="not-found-container">
      <img src={antImage} alt="Ant" className="ant-image" />
      <button className="not-found-button" onClick={redirectClick}>
        Go to Previous Page
      </button>
      <div>
     <img src={antLogo} alt="AntColony-Logo" className="ant-logo-image" />
    </div>
    </div>
  );
}