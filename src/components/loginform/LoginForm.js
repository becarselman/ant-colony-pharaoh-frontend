import './LoginForm.scss';
import Logotype from '../../images/loginform/Logotype.svg';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { loginSuccess } from '../../actions/authActions';
import { actionTypes } from '../../actions/types';


function LoginForm({ actions }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    actions.loginRequest({email, password, navigate});
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
             <h2 className="login-title">Log in</h2>
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
          <label className="password-text">Password</label>
          <input
            type="password"
            name="login_password"
            value={password}
            onChange={handlePasswordChange}
            className="placeholder-text"
            placeholder="Enter your password"
          />
          <div className="login-buttons">
            <button type="submit">Log in</button>
            <div className="checkbox-container-a">
               <div className="checkbox-container">
             <input type="checkbox"  id="remember-password" name="remember-password" />
           <label className="remember-password" htmlFor="remember-password">Remember password</label>
           </div>
           <a className="forgot-password" href="/forgot-password">Forgot password?</a>
         </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
