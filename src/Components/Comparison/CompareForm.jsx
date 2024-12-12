// import React from 'react'

function CompareForm({state,updateState}) {
 
    return (
        <div>

            <div className="container" >
                <div className="row">
                    <div className="col-6 offset-3 p-5 bg-black4 shadow">
                        <h1 className="text-black p-3  fw-bold text-center fs-3"><b>Enquiry now</b></h1>
                        <form action="">
                            <div className="row">
                                <div className="col-6">
                                    <label htmlFor="full_name" className="form-label">Full name :
                                        <input type="text" id="full_name" className="form-control" placeholder="Enter name " />
                                    </label>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="date_of_birth" className="form-label"> Date of birth:
                                        <input type="date" id="date_of_birth" className="form-control" placeholder=" Enter Dob " />
                                    </label>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-5">
                                    <label htmlFor="mobile_number" className="form-label">Mobile Number:
                                        <input type="number" id="mobile_number" className="form-control" placeholder="Enter number" />
                                    </label>
                                </div>

                                <div className="col-md-7">
                                    <label className="form-label d-block">Gender:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="male" value="male" />
                                            <label className="form-check-label" htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="female" value="female" />
                                            <label className="form-check-label" htmlFor="female">Female</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="radio" name="gender" id="other" value="other" />
                                            <label className="form-check-label" htmlFor="other">Other</label>
                                    </div>
                                </div>
                            </div>



                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="email_address" className="form-label">Enter Email Address :</label>
                                        <input type="email" id="email_address" className="form-control" placeholder="Enter Email" />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="state_name" className="form-label">State:</label>
                                    <select id="state_name" className="form-control">
                                        <option value="" disabled selected>Enter State</option>
                                        <option value="state1">state 1</option>
                                        <option value="state2">State 2</option>
                                        <option value="state3">State 3</option>
                                        <option value="state4">State 4</option>
                                        <option value="state5">State 5</option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="city_name" className="form-label">City:</label>
                                    <select id="city_name" className="form-control">
                                        <option value="" disabled selected>Enter City</option>
                                        <option value="city1">City 1</option>
                                        <option value="city2">City 2</option>
                                        <option value="city3">City 3</option>
                                        <option value="city4">City 4</option>
                                        <option value="city5">City 5</option>
                                    </select>
                                </div>
                            </div>



                            <button className="btn btn-danger btn-lg mt-2 " onClick={updateState}>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompareForm;