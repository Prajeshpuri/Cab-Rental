import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
import './Booking.css';
import queryString from 'query-string';


const Booking = ({location}) => {
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')
  const [issue, setIssue] = useState('')
  const [returndate, setReturnDate] = useState('')
 
  const {id} = queryString.parse(location.search) 
  console.log(id)
  

  return (
    <div className="container1">
      <div className="container">
    <h2>Booking details </h2>
<br/>
<br/>
<br/>
    <form >
      <div className="form-row">
        <div className="form-group col-md-6">
          <label>Name</label>
          <input type="text" className="form-control" id="Name" placeholder="Jone Doe" required onChange={(event) => setName(event.target.value)}/>
        </div>
          
        <div className="form-group col-md-6">
            <label >Contact number</label>
            <input type="text" maxlength="13" pattern="^((\+91[0-9]{10})|(0[0-9]{10}))$" title="Only indian numbers and '+' are accepted" className="form-control" id="Contactnumber" placeholder="+91" required onChange={(event) => setContact(event.target.value)} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label >Issue Date</label>
          <input type="date" className="form-control" id="IssueDate" required onChange={(event) => setIssue(event.target.value)} />
        </div>
          
        <div className="form-group col-md-6">
            <label >Return Date</label>
            <input type="date" className="form-control" min='IssueDate' title="Please Input Return date ahead of Issue Date" id="Return Date" required onChange={(event) => setReturnDate(event.target.value)} />
        </div>
      </div>
      <a href='/' className="btn btn-light">Back</a>
      <Link to={`/Details?id=${id}&name=${name}&contact=${contact}&issue=${issue}&returndate=${returndate}`}>    
      <button type="summit" onClick={(event) => (!name&&!contact&&!issue&&!returndate)?event.preventDefault(): null} className="btn btn-dark bookcab" >Book cab </button>
      </Link>
</form>
</div>
</div>
  );
}

export default Booking;
