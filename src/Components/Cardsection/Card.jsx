import React from 'react';
import './Card.css'; // Import the CSS file

const TopCards = () => {
  return (
    <section className="top-cards">
      <div className="container">
        <div className="card-container">
          <div className="top-card">
            <h5 className="number"><b>500+</b></h5>
            <p className="label"><b>programs</b></p>
          </div>
          <div className="top-card">
            <h5 className="number"><b>100K+</b></h5>
            <p className="label"><b>students</b></p>
          </div>
          <div className="top-card">
            <h5 className="number"><b>350+</b></h5>
            <p className="label"><b>expert mentors</b></p>
          </div>
          <div className="top-card">
            <h5 className="number">
             <b> 4.2
             <img src="https://e7.pngegg.com/pngimages/136/741/png-clipart-computer-icons-star-a-of-a-star-angle-leaf-thumbnail.png" alt="icon" className="star-icon" /></b>
            </h5>
            <p className="label"><b>rating by students</b></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCards;