import { useState } from "react";
import "./Universitycom.css";

const universities = [
  { id: 1, name: "University A", location: "City A", rank: 5, courses: ["Course 1", "Course 2"], fees: "$10,000/year", facilities: "Library, Sports Complex", alumni: "John Doe" },
  { id: 2, name: "University B", location: "City B", rank: 10, courses: ["Course 3", "Course 4"], fees: "$15,000/year", facilities: "Gym, Cafeteria", alumni: "Jane Smith" },
  { id: 3, name: "University C", location: "City C", rank: 2, courses: ["Course 5", "Course 6"], fees: "$20,000/year", facilities: "Hostel, Research Labs", alumni: "Alice Johnson" },
  { id: 4, name: "University D", location: "City D", rank: 8, courses: ["Course 7", "Course 8"], fees: "$12,000/year", facilities: "Sports Grounds, Auditorium", alumni: "Bob Brown" },
  { id: 5, name: "University E", location: "City E", rank: 1, courses: ["Course 9", "Course 10"], fees: "$25,000/year", facilities: "Advanced Labs, Art Studio", alumni: "Charlie Davis" },
  { id: 6, name: "University F", location: "City F", rank: 15, courses: ["Course 11", "Course 12"], fees: "$8,000/year", facilities: "Community Center, Open Library", alumni: "Diana Lee" },
];

function UniversityComparison() {
  const [selectedUni1, setSelectedUni1] = useState("");
  const [selectedUni2, setSelectedUni2] = useState("");
  const [comparisonData, setComparisonData] = useState(null);

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
        <h2> Compare Universities</h2>
        <div className="comparison-selectors">
          <div>
            <label>Select University 1:</label>
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
            <label>Select University 2:</label>
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
            Compare
          </button>
        </div>

        {comparisonData && (
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
