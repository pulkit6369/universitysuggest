import  { useState } from 'react'; 
import './Contactus.css'; // Import the external CSS file

const ContactUs = () => {
  const [otpVerified, setOtpVerified] = useState(false);

  // Functions to handle OTP verification and resend (you can replace these with actual logic)
  const handleVerifyOTP = () => {
    setOtpVerified(true);
  };

  const handleResendOTP = () => {
    setOtpVerified(false);
  };

  return (
    <section className="contact-us my-5">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 col-12">
            <div className="left-side">
              <h2>universitysuggest Learner Support</h2>
              <p>Have questions or need guidance? Our team is here to help you every step of the way. Reach out for personalized support.</p>
              <div className="cards-list">
                <div className="card d-block border-0 py-4 ps-4">
                  <a href="https://wa.me/+919785800008?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
                    <div className="content">
                      <p className="mb-0"><b>WhatsApp Number</b></p>
                      <small>Connect with us on WhatsApp</small>
                    </div>
                  </a>
                  <a href="https://wa.me/+919785800008?text=Hello%20there!" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/icons/redwp.png" alt="WhatsApp Icon" />
                  </a>
                </div>
                <div className="card d-block mt-3 border-0 py-4 ps-4">
                  <a href="mailto:support@universitysuggest.com">
                    <div className="content">
                      <p className="mb-0"><b>Send Email</b></p>
                      <small>Send us your email</small>
                    </div>
                    <img src="/assets/icons/redmail.png" alt="Email Icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column (Form) */}
          <div className="col-md-6 col-12">
            <div  className="card border-0 contact-card align-items-center justify-content-center p-4 mt-s-10 ">
              <form  id="contactForm" action="https://www.universitysuggest.com/query-form" method="POST">
                <input type="hidden" name="_token" value="CtIVQp2xUalEx8J0ywlWo2z8OSqaxthfIOT6mlf5" />
                <div className="form-group">
                  <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Full Name" required />
                </div>
                <div className="form-group my-3">
                  <input type="email" id="email" className="form-control" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" id="mobileNumber" className="form-control mobile02" name="mobileNumber" placeholder="Mobile Number" required maxLength="10" />
                </div>
                <div className="form-group my-3">
                  <div className="form_col_12 otpAction">
                    <input type="text" id="txtotpmobile02" className="form-control txtotp txtotpmobile02" placeholder="OTP" required maxLength="6" />
                    <div className="otpActionBtn">
                      <button type="button" className="btnVerify form-control" onClick={handleVerifyOTP}>
                        Verify
                      </button>
                      <button type="button" className="btnResend form-control" onClick={handleResendOTP}>
                        Resend
                      </button>
                      {otpVerified && <button className="btnVerifySuccess form-control" disabled>Verified</button>}
                    </div>
                  </div>
                </div>
                <div className="form-group my-3">
                  <textarea className="form-control" rows="5" placeholder="Write down your query..." required></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-red w-100">SUBMIT</button>
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