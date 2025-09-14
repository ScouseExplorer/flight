import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
return (
    <Router>
      <div>
        {/* Header */}
        <div className="header">
          <Link to="/" className="logo">Fard Flights</Link>
          <div className="header-right">
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
            <Link to="/signup">Sign up</Link>
          </div>
        </div>

        {/* Main Content */}
        
      </div>
    </Router>
  );
}

export default App;
