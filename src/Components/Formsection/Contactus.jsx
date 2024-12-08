import { useState } from "react";
import "./Contactus.css"; // Import the external CSS file

const ContactUs = () => {
  const [otpVerified, setOtpVerified] = useState(false);

  const handleVerifyOTP = () => {
    setOtpVerified(true);
  };

  const handleResendOTP = () => {
    setOtpVerified(false);
  };

  return (
    <section className="contact-us my-5">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Left Column */}
          <div className="col-md-6 col-12 d-flex">
            <div className="left-side card shadow-sm p-4">
              <h2 className="text-danger fw-bold mb-4">UniversitySuggest Learner Support</h2>
              <p className="text-muted">
                Have questions or need guidance? Our team is here to help you every step of the way. Reach out for personalized support.
              </p>
              <div className="cards-list mt-4">
                <div className="card d-flex flex-row align-items-center border-0 py-3 px-3 mb-3">
                  <a href="https://wa.me/+919785800008?text=Hello%20there!" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center w-100 text-decoration-none">
                    <div className="me-3">
                      <img src="/assets/icons/redwp.png" alt="WhatsApp Icon" width="40" />
                    </div>
                    <div>
                      <p className="mb-0 fw-bold text-dark">WhatsApp Number</p>
                      <small className="text-muted">Connect with us on WhatsApp</small>
                    </div>
                  </a>
                </div>
                <div className="card d-flex flex-row align-items-center border-0 py-3 px-3">
                  <a href="mailto:support@universitysuggest.com" className="d-flex align-items-center w-100 text-decoration-none">
                    <div className="me-3">
                      <img src="/assets/icons/redmail.png" alt="Email Icon" width="40" />
                    </div>
                    <div>
                      <p className="mb-0 fw-bold text-dark">Send Email</p>
                      <small className="text-muted">Send us your email</small>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-6 col-12 d-flex">
            <div className="card border-0 shadow-sm contact-card p-4 w-100">
              <form id="contactForm" action="https://www.universitysuggest.com/query-form" method="POST">
                <input type="hidden" name="_token" value="CtIVQp2xUalEx8J0ywlWo2z8OSqaxthfIOT6mlf5" />
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="tel"
                    id="mobileNumber"
                    className="form-control"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    required
                    maxLength="10"
                  />
                </div>
                <div className="form-group mb-3">
                  <div className="d-flex align-items-center">
                    <input
                      type="text"
                      id="txtotpmobile02"
                      className="form-control me-2"
                      placeholder="OTP"
                      required
                      maxLength="6"
                    />
                    <button type="button" className="btn btn-outline-danger me-2" onClick={handleVerifyOTP}>
                      Verify
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleResendOTP}>
                      Resend
                    </button>
                  </div>
                  {otpVerified && (
                    <div className="mt-2 text-success fw-bold">OTP Verified Successfully</div>
                  )}
                </div>
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write down your query..."
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-danger w-100 fw-bold">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
