import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/Main/Main';
import Booking from './components/Booking/Booking'
import Details from './components/Details/Details'
const App = () =>(
<Router>
<Route path ="/" exact component={Main} />
<Route path ="/Booking" exact component={Booking}/>
<Route path ="/Details" exact component={Details}/>
</Router>
);

export default App; 