import '../loginform/LoginForm.scss';
import Logotype from '../../images/loginform/Logotype.svg';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { notification } from 'antd';

const ResetPassword = ({actions}) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { token } = useParams();

  const openNotification = notification.open;

  const passwordPolicy = {
    min: 6,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 0,
  };

  const validatePassword = (newPassword) => {
    if(newPassword.length < passwordPolicy.min || newPassword.length > passwordPolicy.max)
      return false;

    if(passwordPolicy.lowerCase && !/[a-z]/.test(newPassword))
      return false;
    
    if(passwordPolicy.upperCase && !/[A-Z]/.test(newPassword))
      return false;

    if(passwordPolicy.numeric && !/[0-9]/.test(newPassword))
      return false;
    
    return true;
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!validatePassword(newPassword)) {
      openNotification({
        message: 'Error',
        description: 'Invalid password. Password must contain at least 6 characters, and combination of uppercase and lowercase letter and number.',
        type:'error',
      });
      return;
    }
  
    if (newPassword !== confirmPassword) {
      openNotification({
        message: 'Error',
        description: 'Passwords do not match.',
        type: 'error',
      });
      return;
    }
    
    setLoading(true);
    actions.resetPasswordRequest(token, newPassword);
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
        <h2 className="login-title">Reset Password</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="password-text">New Password</label>
          <input
            type="password"
            name="new_password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="placeholder-text"
            placeholder="Create new password"
          />
          <label className="password-text">Confirm Password</label>
          <input
            type="password"
            name="confirmed_password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="placeholder-text"
            placeholder="Confirm your password"
          />
          <div className="login-buttons">
            <button type="submit" disabled={loading || message}>Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
