import {Navigate, useNavigate} from "react-router-dom";
import errorImage from "../../images/custom404/notFound.png"
import "./NotFound.scss"

export const NotFound = () => {
  const navigate = useNavigate()

  const redirectClick = () => {
    navigate(-1)
  }

  return (
    <div className="not-found-container" >
      <button onClick={redirectClick} >
        Go to Previous Page
      </button>
    </div>
  )
}