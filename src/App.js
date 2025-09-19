
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';


import './App.css';

function App() {
  // State for flight type selection
  const [flightType, setFlightType] = useState('one-way');

  // Handler for flight type change
  const handleFlightTypeChange = (e) => {
    setFlightType(e.target.value);
  };

  return (
    <Router>
      <header className="header">
        <Link to="/" className="logo">Fard Flights</Link>
        <nav className="header-right">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign up</Link>
        </nav>
      </header>

  <div className="search-box">
    <section className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-lg">
          <h2 className="fl">Flight Booking</h2>

          {/* Flight Type Selection */}
    <div className="mb-4">
      <label htmlFor="flight-type" className="ft">
        Flight Type
      </label>
      <select
        id="flight-type"
        value={flightType}
        onChange={handleFlightTypeChange}
        className="block"
      >
        <option value="one-way">One Way</option>
        <option value="return">Return</option>
      </select>
    </div>

    
  </section>
    <form className="form1">
      <label  className = "inform1" htmlFor="departure"><b>Departure</b></label>
      <input className = "inform11" type="text" placeholder="Enter Departure Airport" name="departure" required />
    </form> 
    <form className="form2">
      <label className = "inform2" htmlFor="destination"><b>Arrival</b></label>
      <input className = "inform22"type="text" placeholder="Enter Arrival Airport" name="Arrival" required />
    </form>
    <button className="buttonx1" type="submit">Search Flights</button>
  </div>
      <div>
        <h1>Fardin Flights </h1>
        <p>Your one-stop solution for booking flights.</p>

      </div>
      <div>
        <h2>Why Choose Fardin Flights?</h2>
        <ul>
          <li>Competitive pricing</li>
          <li>24/7 customer support</li>
          <li>Easy booking process</li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
