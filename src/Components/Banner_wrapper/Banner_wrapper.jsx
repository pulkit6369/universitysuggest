

function Banner_wrapper() {
    return (
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        {/* <img src="./images/Banner_wrapper/1.png" className="d-block w-100" alt="..." /> */}
                        <img src="https://img.freepik.com/free-psd/college-template-design_23-2151655478.jpg?t=st=1733464956~exp=1733468556~hmac=d886a399666ca69a39f183d4b05c8e8ff63cc09feb4bfab8f8daacff5c50ba55&w=1380" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="https://img.freepik.com/free-psd/business-corporation-template-design_23-2151376449.jpg?t=st=1733464690~exp=1733468290~hmac=d841451bf9366bfa903dc76615e09f0dce13252d02e018e26f6bec781701f42a&w=1380" className="d-block w-100" alt="..." />
                    </div>
                    
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Banner_wrapper