import "../styles/header.css";
import logo from "../images/logo_dark.svg";

const Header = () => {
  return (
    <header>
      <div className='brand'>
        <img src={logo} className="logo"></img>
        <p id="brand-title">GalsGetaway</p>
      </div>

      <ul className="nav">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Create Trip</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
