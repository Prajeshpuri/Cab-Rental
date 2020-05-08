import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import ReactDOM from 'react-dom';
import './Booking.css';

const Booking = () => {



  // class MyForm extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       username: '',
  //       age: null,
  //     };
  //   }
  //   mySubmitHandler = (event) => {
  //     event.preventDefault();
  //     let contactnumber = this.state.age;
  //     if (!Number(contactnumber)) {
  //       alert("Your Contact Number must be a number");
  //     }
  //   }
  //   myChangeHandler = (event) => {
  //     let nam = event.target.name;
  //     let val = event.target.value;
  //     this.setState({[nam]: val});
  //   }

  return (
    <div className="container1">
      <div className="container">
    <h2>Booking details </h2>
<br/>
<br/>
<br/>
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="Name">Name</label>
          <input className="input" type="text" class="form-control" id="Name" placeholder="Jone Doe" required/>
        </div>
          
        <div class="form-group col-md-6">
            <label for="Contactnumber">Contact number</label>
            <input type="text" class="form-control" id="Contactnumber" placeholder="+91"required/>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="IssueDate">Issue Date</label>
          <input type="date" class="form-control" id="IssueDate" required/>
        </div>
          
        <div class="form-group col-md-6">
            <label for="ReturnDate">Return Date</label>
            <input type="date" class="form-control" id="Return Date" required/>
        </div>
      </div>
      <a href='/' className="btn btn-light">Back</a>    
      <button className="btn btn-dark bookcab">Book cab </button>
</form>
</div>
</div>
  );
}

export default Booking;

