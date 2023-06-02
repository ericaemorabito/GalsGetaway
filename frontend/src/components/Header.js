import "../styles/header.css";
import logo from "../images/logo_light.svg";

const Header = () => {
  return (
    <header>
      <div className="brand">
        <a href="/">
          <img src={logo} className="logo"></img>
        </a>
        <a href="/">
          <p id="brand-title" className="nav-link">
            GalsGetaway
          </p>
        </a>
      </div>

      <ul className="nav">
        <li className="nav-link">
          <a className="nav-link" href="/">
            Home
          </a>
        </li>

        <li className="nav-link">
          <a className="nav-link" href="/create">
            <button id="create-nav-btn" className="button">
              Create Trip
            </button>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
