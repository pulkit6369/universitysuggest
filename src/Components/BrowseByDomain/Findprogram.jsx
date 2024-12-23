import React, { useState } from "react";
import "./Findprogram.css";

function BrowseByDomain() {
  const [selectedDomain, setSelectedDomain] = useState("");

  const domains = {
    PGcourses: ["Executive MBA", "MCA", "MCOM", "MA", "MBA", "PGDM"],
    UGcourses: ["BA", "BBA", "Bcom"],
    ExecutivePrograms: ["Executive MBA", "Project Management", "Data Science"],
    Certification: ["PGCM", "UI & UX"],
  };

  return (
    <div className="browse-by-domain">
      <label htmlFor="domain-dropdown" className="dropdown-label">Browse by Domain:</label>
      <select
        id="domain-dropdown"
        className="domain-select"
        onChange={(e) => setSelectedDomain(e.target.value)}
      >
        <option value="">Select a Domain</option>
        {Object.keys(domains).map((domain) => (
          <option key={domain} value={domain}>
            {domain}
          </option>
        ))}
      </select>

      {selectedDomain && (
        <div className="subdomain-list">
          <h4 className="subdomain-title">{selectedDomain} Courses</h4>
          <ul>
            {domains[selectedDomain].map((course, index) => (
              <li key={index} className="subdomain-item">
                {course}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BrowseByDomain;
