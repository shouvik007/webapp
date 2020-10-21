import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch ,Route  } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Pages/Home';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';
import SignUp from './Components/Pages/SignUp';
import ContactUs from './Components/Pages/ContactUs';


function App() {
  return (
    <div>
    <Router >
        <Navbar/>
        <Switch>
             <Route path='/' exact component=
             {Home} />
             <Route path='/services' exact component=
             {Services} />
             <Route path='/products' exact component=
             {Products} />
             <Route path='/sign-up' exact component=
             {SignUp} />
             <Route path='/contact-us' exact component=
             {ContactUs} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
