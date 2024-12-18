
import  { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    mobileNumber: "",
    gender: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/register", formData);
      alert("Registration successful!");
      navigate("/login");
    // eslint-disable-next-line no-unused-vars
    } catch (Error) {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3 p-5 shadow">
          <h1 className="text-danger p-3 fw-bold text-center fs-3">
            <b>Register Form</b>
          </h1>
          <form className="text-dark" onSubmit={handleRegister}>
            <div className="row">
              <div className="col-6">
                <label htmlFor="fullName" className="form-label">
                  Full Name:
                  <input
                    type="text"
                    id="fullName"
                    className="form-control"
                    placeholder="Enter name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="col-6">
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth:
                  <input
                    type="date"
                    id="dateOfBirth"
                    className="form-control"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-5">
                <label htmlFor="mobileNumber" className="form-label">
                  Mobile Number:
                  <input
                    type="text"
                    id="mobileNumber"
                    className="form-control"
                    placeholder="Enter number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="col-md-7">
                <label className="form-label d-block">Gender:</label>
                {["male", "female", "other"].map((gender) => (
                  <div className="form-check form-check-inline" key={gender}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id={gender}
                      value={gender}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor={gender}>
                      {gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="email" className="form-label">
                Email Address:
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password" className="form-label">
                Your Password:
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-outline-danger btn-lg mt-2 fw-bold"
              >
                Register
              </button>
            </div>
            <div className="text-center mt-3">
              <p>
                User already registered? <NavLink to="/login">Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
