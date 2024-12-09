import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Submenuu from './Submenu';

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light m-3 bg-back">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="./images/Logo/log.png" alt="Logo" className='img-fluid' />
                    </Link>
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
                        <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/find-programs">
                                    Find Programs
                                </NavLink>
                                <Submenuu />
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/top-universities">
                                    Top Universities
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/expert-advice">
                                    ✅ Expert Advice
                                </NavLink>
                            </li>
                            <li className="nav-item">
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
        </>
    );
}

export default Navbar;
