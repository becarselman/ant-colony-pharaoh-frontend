import '../loginform/LoginForm.scss';
import Logotype from '../../images/loginform/Logotype.svg';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import authService from '../../service/authService';
import { passwordRequest } from '../../actions/authActions.js';


function ForgotPassword({ actions }) {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(passwordRequest(email));
  };
  
  const logoImage = windowWidth >= 768 ? (
    <div className="login-left">
    <div className="image-container"></div>
    <img className="logo-type" src={Logotype} alt="Photo" />
    </div>
    ) : (
    <img src={Logotype} alt="Logo" className="logotype-mobile" />
    );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
             <div className="login-container">
             {logoImage}
             <div className="login-right">
             <h2 className="login-title">Forgot your password?</h2>
             <form className="login-form" onSubmit={handleSubmit}>
             <label className="email-text">Email</label>
             <input
            type="email"
            name="login_email"
            value={email}
            onChange={handleEmailChange}
            className="placeholder-text"
            placeholder="Enter your email"
          />
          <div className="login-buttons">
            <button type="submit">Send me email</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
