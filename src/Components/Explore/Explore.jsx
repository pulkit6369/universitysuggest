import  { useState } from 'react'; 
import './Explore.css';

const ProgramTabs = () => {
  const [activeTab, setActiveTab] = useState('pg-courses'); // Set a default active tab

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="explore-programs py-5 bg-gradient">
      <div className="container">
        {/* Header */}
        <div
          className="section-header text-center mx-auto mb-5"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <h2 className="fw-bold display-4" style={{ color: '#ff2137' }}>
            Explore Our Exclusive Programs
          </h2>
          <p className="text-black fs-5 mt-3">
            Dive into a diverse range of courses tailored to elevate your career. Whether you are
            starting fresh or aiming to upskill, we have the perfect program for you.
          </p>
        </div>
        {/* Header End */}

        {/* Tabs */}
        <div className="tab-section mt-5">
          <ul className="nav justify-content-center nav-pills mb-4" id="programs-tabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'pg-courses' ? 'active' : ''}`}
                onClick={() => handleTabChange('pg-courses')}
              >
                <span className="pill-title">Postgraduate Courses</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'ug-courses' ? 'active' : ''}`}
                onClick={() => handleTabChange('ug-courses')}
              >
                <span className="pill-title">Undergraduate Courses</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'executive-programs' ? 'active' : ''}`}
                onClick={() => handleTabChange('executive-programs')}
              >
                <span className="pill-title">Executive Programs</span>
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className={`nav-link ${activeTab === 'certification' ? 'active' : ''}`}
                onClick={() => handleTabChange('certification')}
              >
                <span className="pill-title">Certification Programs</span>
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            {/* PG Courses Tab */}
            {activeTab === 'pg-courses' && (
              <div className="tab-pane fade show active">
                <div className="program-cards-container">
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/mca.png" alt="Online MCA" />
                        <p>Online MCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/mca.png" alt="Online MCA" />
                        <p>Online MCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/mca.png" alt="Online MCA" />
                        <p>Online MCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/mca.png" alt="Online MCA" />
                        <p>Online MCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* UG Courses Tab */}
            {activeTab === 'ug-courses' && (
              <div className="tab-pane fade show active">
                <div className="program-cards-container">
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/bca.png" alt="Online BCA" />
                        <p>Online BCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/bca.png" alt="Online BCA" />
                        <p>Online BCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/bca.png" alt="Online BCA" />
                        <p>Online BCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/bca.png" alt="Online BCA" />
                        <p>Online BCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/bca.png" alt="Online BCA" />
                        <p>Online BCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/bca.png" alt="Online BCA" />
                        <p>Online BCA</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Executive Programs Tab */}
            {activeTab === 'executive-programs' && (
              <div className="tab-pane fade show active">
                <div className="program-cards-container">
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/executive-program.png" alt="Executive Program" />
                        <p>Executive Program in Management</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/executive-program.png" alt="Executive Program" />
                        <p>Executive Program in Management</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/executive-program.png" alt="Executive Program" />
                        <p>Executive Program in Management</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/executive-program.png" alt="Executive Program" />
                        <p>Executive Program in Management</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/executive-program.png" alt="Executive Program" />
                        <p>Executive Program in Management</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/executive-program.png" alt="Executive Program" />
                        <p>Executive Program in Management</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Certification Programs Tab */}
            {activeTab === 'certification' && (
              <div className="tab-pane fade show active">
                <div className="program-cards-container">
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/certification.png" alt="Certification Program" />
                        <p>Digital Marketing Certification</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/certification.png" alt="Certification Program" />
                        <p>Digital Marketing Certification</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/certification.png" alt="Certification Program" />
                        <p>Digital Marketing Certification</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/certification.png" alt="Certification Program" />
                        <p>Digital Marketing Certification</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/certification.png" alt="Certification Program" />
                        <p>Digital Marketing Certification</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                  <div className="program-card">
                    <a to="/">
                       
                      <div className="card-body text-center">
                        <img src="./assets/certification.png" alt="Certification Program" />
                        <p>Digital Marketing Certification</p>
                      </div>
                    </a>
                    <div className="card-footer">
                      <a to="/" className="link">
                        View Program
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramTabs;
