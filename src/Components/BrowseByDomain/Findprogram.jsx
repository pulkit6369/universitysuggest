import  { useState } from 'react';
import './Findprogram.css';

function BrowseByDomain() {
  const [selectedDomain, setSelectedDomain] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');

  const domains = {
    PGCourses: ['Executive MBA', 'MCA', 'MCOM', 'MA', 'MBA', 'PGDM', 'PGDBA', 'MAJMC'],
    UGCourses: ['BA', 'BBA', 'Bcom', 'BCA', 'BAJMC', 'BBA - ACCA'],
    ExecutivePrograms: ['Executive MBA', 'Project Management', 'Data Science', 'Hospital & Health Care Manage--', 'PGDM(Ex)', 'Chief Executive officer'],
    Certification: ['PGCM', 'UI & UX', 'Project Management', 'Data Science', 'AI In Digital Marketing', 'AI In Machine Learning'],
  };

  const programs = {
    'Executive MBA': [
      { name: 'IIM Lucknow', price: '₹ 208,500.00/-' },
      { name: 'MIT Pune', price: '₹ 35,000.00/-' },
      { name: 'IIM Bangalore', price: '₹ 150,000.00/-' },
    ],
    'Project Management': [
      { name: 'IIM Lucknow', price: '₹ 208,500.00/-' },
      { name: 'MIT Pune', price: '₹ 35,000.00/-' },
      { name: 'XLRI Jamshedpur', price: '₹ 180,000.00/-' },
    ],
    'Data Science': [
      { name: 'IIM Lucknow', price: '₹ 208,500.00/-' },
      { name: 'MIT Pune', price: '₹ 35,000.00/-' },
      { name: 'IIT Madras', price: '₹ 220,000.00/-' },
    ],
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="browse-by-domain">
            <label className="list-label">Browse by Domain:</label>
            <ul className="domain-list">
              {Object.keys(domains).map((domain) => (
                <li
                  key={domain}
                  className={domain === selectedDomain ? 'selected' : ''}
                  onClick={() => {
                    setSelectedDomain(domain);
                    setSelectedCourse('');
                  }}
                >
                  {domain}
                  <i
                    className={`fa-solid ${domain === selectedDomain ? 'fa-angle-down' : 'fa-angle-up'
                      }`}
                    style={{ float: 'right' }}
                  ></i>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md-3">
          {selectedDomain && (
            <div className="subdomain-list">
              <label className="list-label">Select Course:</label>
              <ul className="course-list">
                {domains[selectedDomain].map((course, index) => (
                  <li
                    key={index}
                    className={course === selectedCourse ? 'selected' : ''}
                    onClick={() => setSelectedCourse(course)}
                  >
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="col-md-6">
          {selectedCourse && (
            <div className="program-list">
              <h4 className="program-title">{selectedCourse} Programs</h4>
              <div className="program-cards">
                {programs[selectedCourse]?.map((program, index) => (
                  <div key={index} className="program-card">
                    <div className="program-card-header">
                      <h5 className="program-card-title">{program.name}</h5>
                    </div>
                    <div className="program-card-body">
                      <p className="program-card-price">{program.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrowseByDomain;
