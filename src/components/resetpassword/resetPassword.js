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

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
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
