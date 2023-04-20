import './LoginForm.scss';
import Logotype from '../../images/loginform/Logotype.svg';
import authService from '../../service/authService';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { notification } from 'antd'

function LoginForm({ actions }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await authService.login(email, password);
      dispatch(actions.loginSuccess(res.data));
      navigate('/welcome');
    } catch (error) {
      notification.error({
        message: error.response.data.message,
      })
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="image-container"></div>
        <img className="logo-type" src={Logotype} alt="Photo" />
      </div>
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
                <input type="checkbox" id="remember-password" name="remember-password" />
                <label htmlFor="remember-password">Remember password</label>
              </div>
              <a className="forgot-password" href="#">Forgot password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
