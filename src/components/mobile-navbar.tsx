import { Link } from "gatsby";

const MobileNavBar = () => (
  <div className="mobile-navbar-container">
    <Link to="/">
      <a className="mobile-navbar-item-link-container">
        <span className="mobile-navbar-item-link ">HOME</span>
      </a>
    </Link>

    <Link to="/work">
      <a className="mobile-navbar-item-link-container">
        <span className="mobile-navbar-item-link ">Work</span>
      </a>
    </Link>

    <Link to="/contact">
      <a className="mobile-navbar-item-link-container">
        <span className="mobile-navbar-item-link ">Contact</span>
      </a>
    </Link>
  </div>
);

export default MobileNavBar;
