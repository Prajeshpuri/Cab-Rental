import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Details.css';
import queryString from 'query-string';
import { Link } from 'react-router-dom'


const { getCar, getDetail, book } = require('../database.js')
const Details = ({ location }) => {
    var details = []
    const { id, name, contact, issue, returndate } = queryString.parse(location.search)

    if (name) {
        const a = book({ id, name, contact, issue, returndate })
        if (a === 0) {
            alert("Booked Confirmed !")
        }
        else alert("Already book")
    }

    const car = getCar(id)
    if (car.book) {
        details = getDetail(id)
        return (

            <div className="container">
                <h2 className="text-center">Rent Vroom</h2>
                <a href='/' className="btn btn-light">Home Page</a>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <img src={car.img} className="card-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{car.name}</h5>
                                <pre className="card-text text-muted">{car.color}    {car.seat}</pre>
                                <p>Rent per day: ₹ {car.rent}</p>

                                <button href='/Booking' className="btn btn-dark" disabled='true'>Book Now</button>

                            </div>
                        </div>
                    </div>
                </div>


                <br /> <br /><br />
                <h4 className="text-muted">Car Details</h4>
                <hr />

                <p className="text-muted">{car.Vehicleno}</p>
                <p className="text-muted">{car.type}</p>
                <p className="text-muted">{car.Engine}</p>
                <p></p>

                <br /><br />
                <h5 className="text-muted">Current Booking</h5>
                <table class="table">
                    <tr>
                        <td className="text-muted">NAME</td>
                        <td className="text-muted">PHONE NUMBER</td>
                        <td className="text-muted">ISSUE DATE</td>
                        <td className="text-muted">RETURN DATE</td>
                    </tr>
                    <tr>
                        <td>{details.name}</td>
                        <td>{details.contact}</td>
                        <td>{details.issue}</td>
                        <td>{details.returndate}</td>
                    </tr>
                </table>

                <br /><br /><br /><br />


                <div>
                    <div className="footer-distributed">

                        <div className="footer-left">

                            <h4>Rent Vroom</h4>
                            <p> Rentvroom Pvt. Ltd</p>
                            <p> No: 296, 3rd Cross Rd, jakkasandra, 1st Block, Koramanglia</p>
                            <p> Bengaluru, Karnataka 560034 </p>

                            <div className="footer-icons">
                                <a href="/" alt="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="/" alt="Instagram"><i class="fa fa-instagram"></i></a>
                                <a href="/" alt="Linkedin"><i class="fa fa-linkedin"></i></a>
                            </div>
                            <p className="footer-links">
                                <a href="/" className="btn btn-light">Home</a>
                                        |
                                    <a href="/" className="btn btn-light">About</a>
                                        |
                                    <a href="/" className="btn btn-light">Contact</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <h2 className="text-center">Rent Vroom</h2>
         <a href='/' className="btn btn-light">Home Page</a>
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-6">
                        <img src={car.img} className="card-img" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-center">
                            <h5 className="card-title">{car.name}</h5>
                            <pre className="card-text text-muted">{car.color}    {car.seat}</pre>
                            <p>Rent per day: ₹ {car.rent}</p>
                            <Link to={`/Booking?id=${id}`}>
                                <button className="btn btn-dark">Book Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <br /> <br /><br />
            <h4 className="text-muted">Car Details</h4>
            <hr />

            <p className="text-muted">{car.Vehicleno}</p>
            <p className="text-muted">{car.type}</p>
            <p className="text-muted">{car.Engine}</p>
            <p></p>

            <br /><br /><br /><br />
            <div>
                <div className="footer-distributed">

                    <div className="footer-left">

                        <h4>Rent Vroom</h4>
                        <p> Rentvroom Pvt. Ltd</p>
                        <p> No: 296, 3rd Cross Rd, jakkasandra, 1st Block, Koramanglia</p>
                        <p> Bengaluru, Karnataka 560034 </p>

                        <div className="footer-icons">
                            <a href="/" alt="Twitter"><i className="fa fa-twitter"></i></a>
                            <a href="/" alt="Instagram"><i className="fa fa-instagram"></i></a>
                            <a href="/" alt="Linkedin"><i className="fa fa-linkedin"></i></a>
                        </div>
                        <p className="footer-links">
                            <a href="/" className="btn btn-light">Home</a>
                                    |
                                <a href="/" className="btn btn-light">About</a>
                                    |
                                <a href="/" className="btn btn-light">Contact</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Details;