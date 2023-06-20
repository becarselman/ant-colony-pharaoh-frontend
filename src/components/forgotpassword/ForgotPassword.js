import '../loginform/LoginForm.scss';
import Logotype from '../../images/loginform/Logotype.svg';
import { useState, useEffect } from 'react';
import { notification } from 'antd';


const ForgotPassword = ({actions}) => {
  const [email, setEmail] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(false);


  const openNotification = notification.open;

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };



  const handleSubmit = async (e) => {

    e.preventDefault();
  
    if (email.trim() === '') {
      openNotification({
        message: 'Error',
        description: 'Please enter your email.',
        type: 'error',
      });
      return;
    }

    if (!validateEmail(email)) {
      openNotification({
        message: 'Error',
        description: 'Please enter a valid email.',
        type: 'error',
      });
      return;
    }

    actions.passwordRequest({ email });

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
          <button type="submit" disabled={loading}>
            Send me email
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
