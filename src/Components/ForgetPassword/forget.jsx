import React, { useState } from 'react';
import './forget.css'; // Optional: Add CSS for styling
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState(1); // Step 1 for email input, Step 2 for password reset
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send email to the backend for processing
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message); // Show success message
      setStep(2); // Move to the password reset form
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    try {
      // Send new password to the backend
      const response = await axios.post('/api/reset-password', { email, password });
      setMessage(response.data.message); // Show success message
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      {step === 1 ? (
        <>
          <h2>Forgot Password</h2>
          <form onSubmit={handleEmailSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
           
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            
          </form>
        </>
      ) : (
        <>
          <h2>Reset Password</h2>
          <form onSubmit={handlePasswordSubmit}>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Reset Password
            </button>
          </form>
        </>
      )}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ForgotPassword;
