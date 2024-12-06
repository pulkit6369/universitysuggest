import './Leading-banner.css';
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const LeadingUniversities = () => {
    // Initialize universities state
    const [universities, setUniversities] = useState([
        { name: "Amity University Online", link: "https://www.collegesathi.com/university/amity-university-online", img: "https://via.placeholder.com/150" },
        { name: "NMIMS University Online", link: "https://www.collegesathi.com/university/nmims-online", img: "https://via.placeholder.com/150" },
        { name: "Manipal University Online", link: "https://www.collegesathi.com/university/manipal-university-online", img: "https://via.placeholder.com/150" },
        { name: "Chandigarh University Online", link: "https://www.collegesathi.com/university/chandigarh-university", img: "https://via.placeholder.com/150" },
        { name: "Sharda University Online", link: "https://www.collegesathi.com/university/sharda-university", img: "https://via.placeholder.com/150" },
        { name: "Amity University Online", link: "https://www.collegesathi.com/university/amity-university-online", img: "https://via.placeholder.com/150" },
        { name: "NMIMS University Online", link: "https://www.collegesathi.com/university/nmims-online", img: "https://via.placeholder.com/150" },
        { name: "Manipal University Online", link: "https://www.collegesathi.com/university/manipal-university-online", img: "https://via.placeholder.com/150" },
        { name: "Chandigarh University Online", link: "https://www.collegesathi.com/university/chandigarh-university", img: "https://via.placeholder.com/150" },
        { name: "Sharda University Online", link: "https://www.collegesathi.com/university/sharda-university", img: "https://via.placeholder.com/150" },
    ]);

    // Simulate data fetching with useEffect
    useEffect(() => {
        // Simulate an API call or other asynchronous operation
        setTimeout(() => {
            setUniversities([
                ...universities,
                { name: "New University Online", link: "https://www.new-university.com", img: "https://via.placeholder.com/150" }
            ]);
        }, 2000);
    }, [ ]); // Empty dependency array means this effect runs only once when the component mounts.

    // Slider settings
    const settings = {
       
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 200,
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
        <section className="leading-universities my-5">
            <div className="container">
                <div className="header d-flex align-items-center justify-content-between">
                    <div>
                        <h2 className="mb-1">Discover Leading Universities</h2>
                        <p className="mb-0">
                            Compare programs from 100+ verified institutions to make informed decisions with us
                        </p>
                    </div>
                    <a href="/" className="btn btn-red sm-ds-none">View All</a>
                </div>
                <div className="body mt-5">
                    <Slider {...settings}>
                        {universities.map((university, index) => (
                            <div className="swiper-slide" key={index}>
                                <div className="card-content cards p-0 border-0">
                                    <div className="body p-2">
                                        <a href={university.link}>
                                            <img src={university.img} alt="university-logo" />
                                            <p className="mb-0" style={{ color: 'red' }}>{university.name}</p>
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
