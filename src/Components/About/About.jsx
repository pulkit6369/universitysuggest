import hatImage from '../../assets/hat.jpg';
import './About.css';

function About() {
  return (
    <div>
      <div className="container">
        <div className="row">
          {/* Main Heading */}
          <h1 className="text text-center fw-bold mb-4">
            About <span className="text-danger">Us</span>
          </h1>
          {/* Introduction Section */}
          <div className="col-6">
            <h2 className="text text-center">Nice to Meet You</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vero necessitatibus aut fugit laboriosam, maiores repellendus nesciunt quaerat molestiae et! Aut deserunt facere, maiores blanditiis accusamus facilis quo provident animi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus corrupti labore ipsam, qui sed. We believe in empowering individuals with the right tools and resources to achieve their goals.
            </p>
          </div>
          <div className="col-6 about_image">
            <img src={hatImage} alt="Eduaxs image" className="img-fluid" />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center fw-bold mb-3">
              Our <span className="text-danger">Mission</span>
            </h2>
            <p className="text-center">
              Our mission is to provide quality education and career counseling to empower students and professionals to achieve their full potential. We strive to bridge the gap between dreams and reality through personalized guidance and innovative solutions.
            </p>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center fw-bold mb-3">
              Our <span className="text-danger">Vision</span>
            </h2>
            <p className="text-center">
              To become a global leader in education and career counseling, transforming lives and creating a brighter future for generations to come. We envision a world where every individual has access to the resources and support they need to succeed.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center fw-bold mb-3">
              Why <span className="text-danger">Choose Us</span>
            </h2>
            <ul>
              <li>Personalized career guidance tailored to your needs.</li>
              <li>Experienced professionals and certified counselors.</li>
              <li>Comprehensive programs and tools for skill development.</li>
              <li>Proven track record of success stories.</li>
            </ul>
          </div>
        </div>

        {/* Our Team Section */}
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center fw-bold mb-3">
              Meet <span className="text-danger">Our Team</span>
            </h2>
            <p className="text-center">
              Our team comprises passionate professionals with diverse expertise, committed to helping you succeed. Together, we aim to provide the best guidance and support for your educational and career aspirations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
