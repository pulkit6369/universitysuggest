
import { NavLink } from 'react-router-dom';


function Submenuu() {
    return (
        <ul className="dropdown-menu">
            <li>
                <NavLink className="dropdown-item" to="/pg-courses">PG Courses</NavLink>
            </li>
            <li>
                <NavLink className="dropdown-item" to="/ug-courses">UG Courses</NavLink>
            </li>
            <li>
                <NavLink className="dropdown-item" to="/executive-programs">Executive Programs</NavLink>
            </li>
            <li>
                <NavLink className="dropdown-item" to="/certifications">Certification</NavLink>
            </li>
        </ul>
    );
}

export  default Submenuu;
