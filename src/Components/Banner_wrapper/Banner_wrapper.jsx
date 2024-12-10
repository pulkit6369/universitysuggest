
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function BannerWrapper() {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    <img
                        src="/images/img1.jpeg"
                        className="d-block w-100"
                        alt="College Template"
                        style={{ width: '350px', height: '350px' }}
                     
                    />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img
                        src="/images/img2.jpeg"
                        className="d-block w-100"
                        alt="Business Corporation Template"
                        style={{ width: '350px', height: '350px' }}
                    />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img
                        src="/images/img3.jpeg"
                        className="d-block w-100"
                        alt="Business Corporation Template"
                        style={{ width: '350px', height: '350px' }}
                    />
                </div>
            </div>
            {/* Removed carousel control buttons */}
        </div>
    );
}

export default BannerWrapper;
