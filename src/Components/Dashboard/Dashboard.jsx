import React from 'react';
import './Dashboard.css';


function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Update User</h1>
      <form className="dashboard-form">
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">FullName</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
         {/* Phone num */}
         <div className="form-group">
          <label htmlFor="number">PhoneNumber</label>
          <input type="tel" id="name" placeholder="Enter your phone Number" />
        </div>
        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        {/* Gender Field */}
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
         {/* Password */}
         <div className="form-group">
          <label htmlFor="Password">Password</label>
          <input type="password" id="name" placeholder="Enter your Password" />
        </div>
        {/* Date of Birth Field */}
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" />
        </div>
      
  
        {/* Submit Button */}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>








  );
}



export default Dashboard;
