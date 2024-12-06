import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light m-3 bg-back">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                    <img src="./images/Logo/log.png" alt="Logo" className='img-fuild' />
                    </Link>
                    <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-stream"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-4  mb-lg-0 menu-nav ">
                            <li className="nav-item  my-sm-2">
                                <NavLink className="nav-link mx-4 fs-5 program text-light px-5" to="/">Find Programs</NavLink>
                            </li>
                            <li className="nav-item uni my-sm-2">
                                <NavLink className="top mx-4 fs-5 fw-bold px-3" to="/top-universities">Top Universities</NavLink>
                            </li>
                            <li className="nav-item my-sm-2">
                                <NavLink className="nav-link fs-5 mx-4 expert px-3" to="/expert-advice">✅ Expert Advice</NavLink>
                            </li>
                            <li className="nav-item my-sm-2 fs-5">
                                <NavLink className="nav-link num mx-4 px-3 " to="/">
                                <span className='fw-bold rounded-pill d-flex '>HelpLine</span>
                                9785-800-008
                                </NavLink>
                            </li>

                        </ul>
                        <form className="d-flex ps-5 ">
                            <button className="btn btn-outline-danger fs-5 px-3 py-2" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar