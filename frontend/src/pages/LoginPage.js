import "../styles/loginPage.css";
import logo from "../images/logo_dark.svg";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-area">
        <img src={logo} alt="suitcase logo" id="login-logo"></img>
        <p className="subtitle login-title">Login</p>
        <form className="login-form">
          <input type="text" name="email" placeholder="E-mail" className="login-input"></input>
          <input type="text" name="password" placeholder="Password" className="login-input"></input>
        </form>
        <button className="button btn-signature" id="login-btn"> Login </button>
      </div>
    </div>
  );
};

export default LoginPage;
