import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Details.css';
const Details = () => {
    return (
        <div className="container">
            <div class="card mb-3">
  <div class="row no-gutters">
    <div class="col-md-6">
      <img src="..." class="card-img" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">Hyundai Grand i10</h5>
        <pre class="card-text text-muted">White     4 Seater</pre>
        <p>Rent per day: ₹ 350</p>
        <a href='/Booking' className="btn btn-dark">Book Now</a>
      </div>
    </div>
  </div>
</div>


        <br/> <br/><br/>
        <h4 className="text-muted">Car Details</h4>
        <hr/>

        <p className="text-muted"> Vehicle number: 18 D 4356</p>
        <p className="text-muted">Petrol Car</p>
        <p className="text-muted">1.2 Kappa Dual VTVT BS6 Petrol Engine</p>
        <p></p>

        <br/><br/>
        <h5 className="text-muted">Current Booking</h5>
        <table class="table">
            <tr>
                <td className="text-muted">NAME</td>
                <td className="text-muted">PHONE NUMBER</td>
                <td className="text-muted">ISSUE DATE</td>
                <td className="text-muted">RETURN DATE</td>
            </tr>
            <tr>
                <td>Jone Doe</td>
                <td>+919582675764</td>
                <td>25th Jan 20</td>
                <td>28th Jan 20 </td>
            </tr>
        </table>

<br/><br/><br/><br/>

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




export default Details;