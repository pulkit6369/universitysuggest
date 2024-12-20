import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  m-2" id='costum-mode'>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="./images/Logo/log.png" alt="Logo" className="img-fluid" />
        </NavLink>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-stream"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/find-programs">
                Find Programs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/topuniversities">
                Top Universities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/expert-advice">
                ✅ Expert Advice
              </NavLink>
            </li>
            <li className="nav-item helpline">
              <NavLink className="nav-link" to="/">
                HelpLine: 9785-800-008
              </NavLink>
            </li>
          </ul>
          <form className="d-flex ps-3">
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
