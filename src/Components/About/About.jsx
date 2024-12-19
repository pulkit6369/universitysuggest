import hatImage from '../../assets/hat.jpg'
import './About.css'
function About() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h1 className='text text-center fw-bold mb-4'>About <span className='text-danger'>us</span></h1>
                    <div className="col-6 ">
                        {/* Left Column Content */}
                        <h2 className='text text-center'> Nice to meet you </h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque vero necessitatibus aut fugit laboriosam, maiores repellendus nesciunt quaerat molestiae et! Aut deserunt facere, maiores blanditiis accusamus facilis quo provident animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus corrupti labore ipsam, qui sed.</p>
                    </div>
                    <div className="col-6 about_image ">
                        {/* Right Column with Image */}
                        <img src={hatImage} alt="Eduaxs image" className="img-fluid " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
