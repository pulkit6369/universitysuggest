import { useEffect, useState } from "react";
import { fetchUniversities } from "../Comparison/universitiesAPI"; // Your API for universities
import Universitycard from "../UniversityCard/UniversityCaard";
import "./Universitiespage.css";

const Universitiesspage = () => {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [feesRange, setFeesRange] = useState([0, 30000]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchUniversities()
      .then((data) => {
        setUniversities(data);
        setFilteredUniversities(data);

        const allCourses = data.flatMap((u) => u.courses);
        setCourses([...new Set(allCourses)]);
      })
      .catch((error) => console.error("Error fetching universities:", error));
  }, []);

  useEffect(() => {
    const filtered = universities.filter((u) => {
      const fee = parseInt(u.fees.replace(/\D/g, ""));
      const withinRange = fee >= feesRange[0] && fee <= feesRange[1];
      const matchesCourse = !selectedCourse || u.courses.includes(selectedCourse);
      return withinRange && matchesCourse;
    });
    setFilteredUniversities(filtered);
  }, [universities, feesRange, selectedCourse]);

  const handleFeesRangeChange = (e) => {
    const value = Number(e.target.value);
    setFeesRange([0, value]);
  };

  const handleCourseChange = (e) => {
    setSelectedCourse(e.target.value);
  };

  return (
    <div className="universities-page">
      <aside className="filters-sidebar">
        <h4>Filters</h4>
        <div className="filter-group">
          <label>Fees Range</label>
          <input
            type="range"
            min="0"
            max="30000"
            step="500"
            value={feesRange[1]}
            onChange={handleFeesRangeChange}
            className="form-range"
          />
          <p>Selected Fee Range: ${feesRange[0]} - ${feesRange[1]}</p>
        </div>
        <div className="filter-group">
          <label>Select Course</label>
          <select
            value={selectedCourse}
            onChange={handleCourseChange}
            className="form-select"
          >
            <option value="">All Courses</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
      </aside>
      <main className="universities-content">
        <h2 className="my-4">Top Universities</h2>
        <div className="university-cards">
          {filteredUniversities.map((university) => (
            <Universitycard key={university.id} university={university} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Universitiesspage;
