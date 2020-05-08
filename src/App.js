import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Main from './components/Main';
import Booking from './components/Booking/Booking'

const App = () =>(
<Router>
<Route path ="/" exact component={Main} />
<Route path ="/Booking" exact component={Booking}/>
</Router>
);

export default App; 