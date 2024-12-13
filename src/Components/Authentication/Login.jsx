import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post("/api/login", { email, password });
    //   if (response.data.success) {
    //     localStorage.setItem("loggedIn", true);
    //     localStorage.setItem("role", response.data.role);
    //     navigate(response.data.role === "admin" ? "/admin" : "/user");
    //   } else {
    //     setError(response.data.message);
    //   }
    // } catch (err) {
    //   setError("Login failed. Please try again.");
    // }
  };

  return (
    <div className="container" id="container3">
      <div className="row">
        <div className="col-6 offset-3 p-5 shadow">
          <h1 className="text-danger p-3 fw-bold text-center fs-3">
            <b>Login Form</b>
          </h1>
          <form className="text-dark" onSubmit={handleSubmit}>
            {error && <p className="text-danger text-center">{error}</p>}

            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="email_address" className="form-label">
                    Email Address :
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    className="form-control"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Your password :
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-outline-danger btn-lg mt-2 fw-bold"
              >
                Login
              </button>
            </div>

            <div className="text-center mt-3">
            <p>
                User not registered? <NavLink to="/register">Register</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;











// import Register from "./Register";

// import { NavLink } from "react-router-dom";

// function Login({state,updateState}) {
//     return (
//         <div className="container" id="container3">
//             <div className="row">
//                 <div className="col-6 offset-3 p-5  shadow">
//                     <h1 className="text-danger p-3 fw-bold text-center fs-3"><b>Login Form</b></h1>
//                     <form className="text-dark">
//                         <div className="row">
//                             <div className="col-12">
//                                 <div className="form-group">
//                                     <label htmlFor="email_address" className="form-label">Email Address :</label>
//                                     <input type="email" id="email_address" className="form-control" placeholder="Enter your email" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row mt-3">
//                             <div className="col-12">
//                                 <div className="form-group">
//                                     <label htmlFor="password" className="form-label">Your password :</label>
//                                     <input type="password" id="password" className="form-control" placeholder="Enter your password" />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="text-center mt-4">
//                             <button type="submit" className="btn btn-outline-danger btn-lg mt-2 fw-bold" onClick={updateState}>Login</button>
//                         </div>
//                         <div className="text-center mt-3">
//                             <p>User not registered? <NavLink to="/register">Register</NavLink></p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Login;

