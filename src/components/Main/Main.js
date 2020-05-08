import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Main.css';
const Main = () => {
    return (
        <div className="container">
            <div>
                <h3>Car for rent </h3>
            <br/><br/>
            </div>
            <div>
                <table className="table table-striped ">
                    <tr>
                        <td></td>
                        <td className="text-muted"> Car Details </td>
                        <td className="text-muted"> RENT PER DAY </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><img src="./img/HyundaiGrandi10.jpg" alt="Hyundai Grand i10"></img></td>
                        <td>Hyundai Grand i10
                            <tr>
                                <td className="text-muted"> White</td>
                                <td className="text-muted"> 4 Seater</td>
                            </tr>
                        </td>
                        <td>₹ 350</td>
                        <td><a href='/Booking' className="btn btn-dark">Book Now</a> <a href='/Details' className="btn btn-light">Details</a> </td>
                    </tr>

                    <tr>
                        <td><img src="../img/fordEcosport" alt="Ford EcoSport"></img></td>
                        <td>Ford EcoSport
                            <tr>
                                <td className="text-muted"> Deep Blue</td>
                                <td className="text-muted"> 6 Seater</td>
                            </tr>
                        </td>
                        <td>₹ 1350</td>
                        <td><a href='/Booking' className="btn btn-dark">Book Now</a> <a href='/Details' className="btn btn-light">Details</a> </td>
                    </tr>

                    <tr>
                        <td><img src="./img/MarutiSuzukiXL6.jpg" alt="Maruti Suzuki XL6"></img></td>
                        <td>Maruti Suzuki XL6
                            <tr>
                                <td className="text-muted">Glassy Black</td>
                                <td className="text-muted" > 6 Seater</td>
                            </tr>
                        </td>
                        <td>₹ 850</td>
                        <td><a href='/Booking' className="btn btn-dark">Book Now</a> <a href='/Details' className="btn btn-light">Details</a> </td>
                    </tr>

                    <tr>
                        <td><img src="../img/HondaCR-V.jpg" alt="Honda CR-V"></img></td>
                        <td>Honda CR-V
                            <tr>
                                <td className="text-muted">Blue</td>
                                <td className="text-muted"> 4 seater</td>
                            </tr>
                        </td>
                        <td>₹ 450</td>
                        <td><a href='/Booking' className="btn btn-dark">Book Now</a> <a href='/Details' className="btn btn-light">Details</a> </td>
                    </tr>
                </table>
            </div>

            <br/> <br/>

            <div>
                <footer class="footer-distributed">

                    <div class="footer-left">
                        
                            <h4>Rent Vroom</h4>
                                <p> Rentvroom Pvt. Ltd</p>
                                <p> No: 296, 3rd Cross Rd, jakkasandra, 1st Block, Koramanglia</p>
                                <p> Bengaluru, Karnataka 560034 </p>
                    
                            <div class="footer-icons">
                                <a href="/" alt="Twitter"><i class="fa fa-twitter"></i></a>
                                <a href="/" alt="Instagram"><i class="fa fa-instagram"></i></a>
                                <a href="/" alt="Linkedin"><i class="fa fa-linkedin"></i></a>
                            </div>
                            <p class="footer-links">
                                <a href="/" className="btn btn-light">Home</a>
                                    |
                                <a href="/" className="btn btn-light">About</a>
                                    |
                                <a href="/" className="btn btn-light">Contact</a>
                            </p>
                        </div>
                </footer>
            </div>
            </div>
    )

}




export default Main;