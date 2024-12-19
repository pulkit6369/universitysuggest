import PropTypes from 'prop-types'; // Import PropTypes
import { NavLink } from 'react-router-dom';
import "./UniversityCaard.css";


const Universitycard = ({ university }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="university-card">
        <img
          src={university?.image || '/path/to/default-image.jpg'} // Ensure default image path is correct
          alt={university?.name || 'University'}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{university?.name || 'N/A'}</h5>
          <p className="card-text">
            <strong>Location:</strong> {university?.location || 'N/A'}
          </p>
          <p className="card-text">
            <strong>Rank:</strong> {university?.rank || 'N/A'}
          </p>
          <p className="card-text">
            <strong>Fees:</strong> {university?.fees || 'N/A'}
          </p>
          <p className="card-text">
            <strong>Courses:</strong> {university?.courses?.join(", ") || 'N/A'}
          </p>
          <p className="card-text">
            <strong>Facilities:</strong> {university?.facilities || 'N/A'}
          </p>
          <p className="card-text">
            <strong>Alumni:</strong> {university?.alumni || 'N/A'}
          </p>
          {/* <button className="visit-btn">Visit</button> */}
          <NavLink className="visit-btn btn" to="/OnePageUniversity">
            Visit
          </NavLink>

        </div>
      </div>
    </div>
  );
};

// PropTypes validation for the 'university' prop
Universitycard.propTypes = {
  university: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string,
    rank: PropTypes.string,
    fees: PropTypes.string,
    courses: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
    facilities: PropTypes.string,
    alumni: PropTypes.string,
  }).isRequired,
};

export default Universitycard;
