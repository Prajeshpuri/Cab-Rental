import React from 'react';
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
    <div className="container">
      <form className="form" >
        <h2>Booking details </h2>
        <br></br>
        <br></br>
        <br></br>
        <table>
          <tr>
            <td>
              <p>Name</p>
              <input
                type='text'
                name='username'
                placeholder='Jone Doe'
                required
                // onChange={this.myChangeHandler}
              />
            </td>
            <td>
              <p>Contact number</p>
              <input
                type='text'
                name='contactnumber'
                placeholder='+91'
                // onChange={this.myChangeHandler}
              />
            </td>
          </tr>
          <tr>
            <td>
              <p>Issue Date</p>
              <input
                type='text'
                name='issue'
                placeholder='DD/MM/YYYY'
                // onChange={this.myChangeHandler}
              />
            </td>
            <td>
              <p>Return Date</p>
              <input
                type='text'
                name='return'
                placeholder='DD/MM/YYYY'
                // onChange={this.myChangeHandler}
              />
            </td>
          </tr>

          <br />
          <br />
          <tr>
            <td>
              Back
      </td>
            <td>
              <button className="bookcab">Book cab </button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  );

}

export default Booking;

