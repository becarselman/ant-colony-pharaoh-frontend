import './LoginForm.css';

function LoginForm() {
  return (
    <div class="login-container">
      <div class="login-left">
        <div class="image-container">
        </div>
        <img class="logoType" src="img/Logotype.svg" alt="Slika" /> 
      </div>
      <div class="login-right">
        <h2 class="loginTitle">Log in</h2>
        <form class="loginForm">
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
            <a class="forgotPassword" href="#">Forgot password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>


  );
}

export default LoginForm;