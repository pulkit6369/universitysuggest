import  './Expertslider.css'
 

const Expertr = [
  {
    name: 'Ms. Keerti Khandelwal',
    role: 'Sr. Mentor',
    expertise: 'MBA, 10+ Years of Expertise',
    image: 'https://www.universitysuggest.com/uploads/expert/1729666531-expert-image.png',
    consultLink: 'https://www.universitysuggest.com/survey/free-counselling/sarthak-garg%20'
  },
  {
    name: 'Mr. Chirag Nagpal',
    role: 'Sr. Mentor',
    expertise: 'B Tech, 9+ Years of Expertise',
    image: 'https://www.universitysuggest.com/uploads/expert/1729666542-expert-image.png',
    consultLink: 'https://www.universitysuggest.com/survey/free-counselling/raghvendra-singh'
  },
  {
    name: 'Dr. Puja Bora',
    role: 'Sr. Learning Advisor',
    expertise: 'BDS, 6+ Years of Expertise',
    image: 'https://www.universitysuggest.com/uploads/expert/1729666555-expert-image.png',
    consultLink: 'https://www.universitysuggest.com/survey/free-counselling/dr-smith'
  },
  {
    name: 'Ms. Chetna Sharma',
    role: 'Sr. Learning Advisor',
    expertise: 'PGDM, 5+ Years of Expertise',
    image: 'https://www.universitysuggest.com/uploads/expert/1729666566-expert-image.png',
    consultLink: 'https://www.universitysuggest.com/survey/free-counselling/ms-chetna-sharma'
  },
 
 
];

const Expertslider = () => {
  return (
    <section className="teachers-section py-5">
      <div className="container">
        <div className="header text-center mx-auto">
          <h2>Meet some of our <strong style={{ color: '#EC1C24' }}>Program Experts</strong></h2>
        </div>
        <div className="body mt-4">
          <div className="swiper my-tech">
            <div className="swiper-wrapper">
              {Expertr.map((teacher, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="card d-block border-0 p-0">
                    <img
                      src={teacher.image}
                      className="card-img obj-contain"
                      height="310"
                      alt={teacher.name}
                    />
                    <div className="body px-2 py-4 text-center">
                      <h4 className="mb-1">{teacher.name}</h4>
                      <div>
                        <small className="pe-3">{teacher.role}</small>
                      </div>
                      <p className="mb-3 mt-2">{teacher.expertise}</p>
                      <a href={teacher.consultLink} className="btn btn-navi">Consult Now</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertslider;