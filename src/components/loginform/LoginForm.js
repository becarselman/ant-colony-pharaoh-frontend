import './LoginForm.scss';
import Logotype from '../../images/loginform/Logotype.svg';
import authService from '../../service/authService';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginRequest } from '../../actions/authActions';



function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const email = formData.get('login_email');
  const password = formData.get('login_password');
  authService.login(email, password)
    .then((response) => {
      window.location.href = '/welcome';
    })
    .catch((error) => {
      alert(error.message);
    });
}

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginRequest(email, password));
  };

  return (
    <div class="login-container">
      <div class="login-left">
        <div class="image-container">
        </div>
        <img className="logo-type" src={Logotype} alt="Photo" />
      </div>
      <div class="login-right">
        <h2 class="login-title">Log in</h2>
        <form class="login-form">
          <label class="emailh2">Email</label>
          <input type="email" name="login_email" class="placeholder" placeholder="Enter your email"/>
          <label class="passwordh2">Password</label>
          <input type="password" name="login_password" class="placeholder" placeholder="Enter your password" />
          <div class="login-buttons">
            <button type="submit">Log in</button>
            <div class="checkbox-container-a">
            <div class="checkbox-container">
              <input type="checkbox" id="remember-password" name="remember-password"  />
              <label for="remember-password">Remember password</label>
            </div>
            <a class="forgot-password" href="#">Forgot password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>


  );
}

export default LoginForm;