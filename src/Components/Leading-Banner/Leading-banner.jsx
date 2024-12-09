import './Leading-banner.css';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LeadingUniversities = () => {
    // Initialize universities state
    const [universities, setUniversities] = useState([
        { name: "Amity University Online", link: "https://www.collegesathi.com/university/amity-university-online", img: "https://www.collegesathi.com/assets/unis/unilogoamity.png" },
        { name: "NMIMS University Online", link: "https://www.collegesathi.com/university/nmims-online", img: "https://www.collegesathi.com/assets/unis/unilogoNMIMS.png" },
        { name: "Manipal University Online", link: "https://www.collegesathi.com/university/manipal-university-online", img: "https://www.collegesathi.com/assets/unis/unilogomanipal.png" },
        { name: "Chandigarh University Online", link: "https://www.collegesathi.com/university/chandigarh-university", img: "https://www.collegesathi.com/assets/unis/unilogoCU.png" },
        { name: "Sharda University Online", link: "https://www.collegesathi.com/university/sharda-university", img: "https://www.collegesathi.com/assets/unis/unilogoSHARDA.png" },
    ]);

    // Simulate data fetching with useEffect
    useEffect(() => {
        // Simulate an API call or other asynchronous operation
        setTimeout(() => {
            setUniversities((prev) => [
                ...prev,
                { name: "", link: "", img: "" }
            ]);
        }, 2000);
    }, []);

    // Slider settings
    const settings = {
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="leading-universities my-5" style={{ backgroundColor: '#f9f9f9', padding: '2rem 0' }}>
            <div className="container">
                <div className="header d-flex align-items-center justify-content-between mb-4">
                    <div>
                        <h2 className="mb-1" style={{ fontWeight: 'bold', color: '#333' }}>Discover Leading Universities</h2>
                        <p className="mb-0 text-muted">
                            Compare programs from 100+ verified institutions to make informed decisions with us
                        </p>
                    </div>
                    <a href="/" className="btn btn-danger px-3 py-2" style={{ borderRadius: '20px', fontSize: '14px' }}>View All</a>
                </div>
                <div className="body">
                    <Slider {...settings}>
                        {universities.map((university, index) => (
                            <div className="swiper-slide" key={index} style={{ padding: '10px' }}>
                                <div className="card-content cards p-0 border-0 shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
                                    <div className="body text-center p-3">
                                        <a href={university.link} style={{ textDecoration: 'none' }}>
                                            <img src={university.img} alt="university-logo" style={{ maxWidth: '100%', marginBottom: '1rem' }} />
                                            <p className="mb-0" style={{ color: '#d32f2f', fontWeight: 'bold' }}>{university.name}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default LeadingUniversities;
