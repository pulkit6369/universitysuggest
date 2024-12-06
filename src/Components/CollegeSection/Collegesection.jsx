
import './Collegesection.css';


const Collegesection = () => {
  return (
    <section className="university_section">
      <div className="container">
        <div className="headingCard">
          <h2 className="text-center heading">
            {" "}
            Need a reason to pick <strong>UniversitySuggest</strong>
          </h2>
          <p className="paragraphline text-center">
            Empowering Students with Universitysuggest Educational Expertise and
            Support.
          </p>
        </div>
        <ul className="nav nav-pills navbarPill" id="pillsss-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-Search-tab1"
              data-bs-toggle="pill"
              data-bs-target="#pills-Search1"
              type="button"
              role="tab"
              aria-controls="pills-Search1"
              aria-selected="true"
            >
              Search
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link mx-3"
              id="pills-Search-tab2"
              data-bs-toggle="pill"
              data-bs-target="#pills-Search2"
              type="button"
              role="tab"
              aria-controls="pills-Search2"
              aria-selected="true"
            >
              Study
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-Search-tab3"
              data-bs-toggle="pill"
              data-bs-target="#pills-Search3"
              type="button"
              role="tab"
              aria-controls="pills-Search3"
              aria-selected="true"
            >
              Support
            </button>
          </li>
        </ul>
        <div className="collegesathiExpertise">
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-Search1"
              role="tabpanel"
              aria-labelledby="pills-Search-tab"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <figure className="imagethumbBox text-center">
                    <img
                      alt="Search"
                      src="https://collegesathi.com/images/search-image.svg"
                    />
                  </figure>
                </div>
                <div className="col-md-6">
                  <div className="boxshadow">
                    <h3>Search</h3>
                    <ul className="checkListing certificate_listing">
                      <li>
                        <strong>50+</strong> Universities at one platform.
                      </li>
                      <li>
                        Check admission <strong>eligibility</strong> criteria.
                      </li>
                      <li>
                        Choose your <strong>favorite</strong> university.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Search2"
              role="tabpanel"
              aria-labelledby="pills-Search-tab"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <figure className="imagethumbBox text-center">
                    <img
                      alt="Study"
                      src="https://collegesathi.com/images/study-image.svg"
                    />
                  </figure>
                </div>
                <div className="col-md-6">
                  <div className="boxshadow">
                    <h3>Study</h3>
                    <ul className="checkListing certificate_listing">
                      <li>
                        Find the university with best <strong>placements.</strong>
                      </li>
                      <li>
                        Find the university with flexible <strong>payment</strong>{" "}
                        options.
                      </li>
                      <li>
                        Find the university with your preferred{" "}
                        <strong>learning</strong> methods.
                      </li>
                      <li>
                        Find the university with flexible <strong>exam</strong>{" "}
                        schedule.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-Search3"
              role="tabpanel"
              aria-labelledby="pills-Search-tab"
              tabIndex={0}
            >
              <div className="row align-items-center">
                <div className="col-md-6">
                  <figure className="imagethumbBox text-center">
                    <img
                      alt="Support"
                      src="https://collegesathi.com/images/support-image.svg"
                    />
                  </figure>
                </div>
                <div className="col-md-6">
                  <div className="boxshadow">
                    <h3>Support</h3>
                    <ul className="checkListing certificate_listing">
                      <li>
                        Experienced <strong>experts.</strong>
                      </li>
                      <li>
                        <strong>Unbiased</strong> guidance.
                      </li>
                      <li>
                        Timely <strong>updates.</strong>
                      </li>
                      <li>
                        <strong>24*7</strong> assistance.
                      </li>
                      <li>
                        100% post admission <strong>support.</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="circles">
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
    </section>
  );
};

export default Collegesection;