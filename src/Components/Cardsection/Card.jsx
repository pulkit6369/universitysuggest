// import React from 'react';
// import './Card.css'; // Import the CSS file

// const TopCards = () => {
//   return (
//     <section className="top-cards">
//       <div className="container">
//         <div className="card-container">
//           <div className="top-card">
//             <h5 className="number"><b>500+</b></h5>
//             <p className="label"><b>programs</b></p>
//           </div>
//           <div className="top-card">
//             <h5 className="number"><b>100K+</b></h5>
//             <p className="label"><b>students</b></p>
//           </div>
//           <div className="top-card">
//             <h5 className="number"><b>350+</b></h5>
//             <p className="label"><b>expert mentors</b></p>
//           </div>
//           <div className="top-card">
//             <h5 className="number">
//              <b> 4.2
//              <img src="https://e7.pngegg.com/pngimages/136/741/png-clipart-computer-icons-star-a-of-a-star-angle-leaf-thumbnail.png" alt="icon" className="star-icon" /></b>
//             </h5>
//             <p className="label"><b>rating by students</b></p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopCards;





import  { useEffect, useRef } from 'react';
import './Card.css';

const TopCards = () => {
  const numberRefs = useRef([]); // To store references to the number elements

  const animateNumber = (element, targetNumber) => {
    let start = 0;
    const duration = 2000; // Total duration of the animation (in milliseconds)
    const increment = Math.ceil(targetNumber / (duration / 30)); // Increment value based on duration and refresh rate

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        element.textContent = targetNumber; // Ensure it ends at the target number
        clearInterval(timer);
      } else {
        element.textContent = start;
        // element.textContent = start.toFixed(1);
      }
    }, 30); // Refresh every 30ms
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const targetNumber = parseInt(entry.target.dataset.target, 10);
            animateNumber(entry.target, targetNumber);
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when 50% of the element is visible
    );

    numberRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref); // Observe each number element
    });

    return () => observer.disconnect(); // Clean up observer on unmount
  }, []);

  return (
    <section className="top-cards">
      <div className="container">
        <div className="card-container">
          <div className="top-card">
            <h5
              className="number"
              ref={(el) => (numberRefs.current[0] = el)}
              data-target="500"
            >
              0
            </h5>
            <p className="label"><b>programs</b></p>
          </div>
          <div className="top-card">
            <h5
              className="number"
              ref={(el) => (numberRefs.current[1] = el)}
              data-target="100000"
            >
              0
            </h5>
            <p className="label"><b>students</b></p>
          </div>
          <div className="top-card">
            <h5
              className="number"
              ref={(el) => (numberRefs.current[2] = el)}
              data-target="350"
            >
              0
            </h5>
            <p className="label"><b>expert mentors</b></p>
          </div>
          <div className="top-card">
            <h5 className="number"
              // ref={(el) => (numberRefs.current[3] = el)}
              // data-target = "4.5"
            >
              
                4.5
                <img
                  src="https://e7.pngegg.com/pngimages/136/741/png-clipart-computer-icons-star-a-of-a-star-angle-leaf-thumbnail.png"
                  alt="icon"
                  className="star-icon"
                />

            </h5>
            <p className="label"><b>rating by students</b></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopCards;
