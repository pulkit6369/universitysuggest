import { useState, useEffect } from "react";
import { fetchUniversities } from "./universitiesAPI";
import "./Universitycom.css";

function UniversityComparison() {
  const [universities, setUniversities] = useState([]);
  const [selectedUni1, setSelectedUni1] = useState("");
  const [selectedUni2, setSelectedUni2] = useState("");
  const [comparisonData, setComparisonData] = useState(null);

  useEffect(() => {
    // Fetch universities from the API file
    fetchUniversities().then((data) => setUniversities(data));
  }, []);

  const handleCompare = () => {
    const uni1 = universities.find((uni) => uni.name === selectedUni1);
    const uni2 = universities.find((uni) => uni.name === selectedUni2);
    if (uni1 && uni2) {
      setComparisonData([uni1, uni2]);
    
    }
  };

 

  return (
    <div className="comparison-wrapper">
      <div className="university-comparison">
        <h2>Compare Universities</h2>
        <div className="comparison-selectors">
          <div>
            <label><b>Select University 1:</b></label>
            <select
              value={selectedUni1}
              onChange={(e) => setSelectedUni1(e.target.value)}
            >
              <option value="">Select</option>
              {universities.map((uni) => (
                <option key={uni.id} value={uni.name}>
                  {uni.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label><b>Select University 2:</b></label>
            <select
              value={selectedUni2}
              onChange={(e) => setSelectedUni2(e.target.value)}
            >
              <option value="">Select</option>
              {universities.map((uni) => (
                <option key={uni.id} value={uni.name}>
                  {uni.name}
                </option>
              ))}
            </select>
          </div>
          <button className="compare-button" onClick={handleCompare}>
            <b>Compare</b>
          </button>
        </div>

       

        {/* Display comparison data if available */}
        {comparisonData  && (
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>{comparisonData[0].name}</th>
                <th>{comparisonData[1].name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Location</td>
                <td>{comparisonData[0].location}</td>
                <td>{comparisonData[1].location}</td>
              </tr>
              <tr>
                <td>Rank</td>
                <td>{comparisonData[0].rank}</td>
                <td>{comparisonData[1].rank}</td>
              </tr>
              <tr>
                <td>Courses</td>
                <td>{comparisonData[0].courses.join(", ")}</td>
                <td>{comparisonData[1].courses.join(", ")}</td>
              </tr>
              <tr>
                <td>Fees</td>
                <td>{comparisonData[0].fees}</td>
                <td>{comparisonData[1].fees}</td>
              </tr>
              <tr>
                <td>Facilities</td>
                <td>{comparisonData[0].facilities}</td>
                <td>{comparisonData[1].facilities}</td>
              </tr>
              <tr>
                <td>Notable Alumni</td>
                <td>{comparisonData[0].alumni}</td>
                <td>{comparisonData[1].alumni}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default UniversityComparison;
