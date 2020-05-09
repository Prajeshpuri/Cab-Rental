import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
// import img from './img/FordEcosport.jpg';

const Main = () => {
    return (
        <div className="container">
            <div>
                <h3>Car for rent </h3>
                <br /> <br />
            </div>
            <div>
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={require('./img/HyundaiGrandi10.jpg')} alt="Hyundai Grand i10" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Hyundai Grand i10</h5>
                                <pre className="card-text text-muted">White    4 Seater</pre>
                            </div >
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <p className="card-text"> Rent per Day</p>
                                <p className="card-text text-muted"> ₹ 350</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <a href='/Booking?id=1' className="btn btn-dark">Book Now</a>
                                <br /><br />
                                <a href='/Details?id=1' className="btn-lg btn-light">Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={require('./img/FordEcoSport.jpg')} alt="Ford EcoSport" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Ford EcoSport</h5>
                                <pre className="card-text text-muted">Deep Blue    6 Seater</pre>
                            </div >
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <p className="card-text"> Rent per Day</p>
                                <p className="card-text text-muted"> ₹ 1350</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <a href='/Booking?id=2' className="btn btn-dark">Book Now</a>
                                <br /><br />
                                <a href='/Details?id=2' className="btn-lg btn-light">Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={require('./img/MarutiSuzukiXL6.jpg')} alt="Maruti Suzuki XL6" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Maruti Suzuki XL6</h5>
                                <pre className="card-text text-muted">Glassy Black    6 Seater</pre>
                            </div >
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <p className="card-text"> Rent per Day</p>
                                <p className="card-text text-muted"> ₹ 850</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <a href='/Booking?id=3' className="btn btn-dark">Book Now</a>
                                <br /><br />
                                <a href='/Details?id=3' className="btn-lg btn-light">Details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={require('./img/HondaCR-V.jpg')} alt="Honda CR-V" height="90%" width="70%" />
                        </div>
                        <div className="col-md-4">
                            <div className="card-body">
                                <h5 className="card-title">Honda CR-V</h5>
                                <pre className="card-text text-muted">Blue    4 Seater</pre>
                            </div >
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <p className="card-text"> Rent per Day</p>
                                <p className="card-text text-muted"> ₹ 450</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="card-body">
                                <a href='/Booking?id=4' className="btn btn-dark">Book Now</a>
                                <br /><br />
                                <a href='/Details?id=4' className="btn-lg btn-light">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /> <br />

            <div>
                <footer className="footer-distributed">

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
                </footer>
            </div>
        </div >
    )

}




export default Main;