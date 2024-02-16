import React from 'react';
import { Link } from 'react-router-dom';
import './../App.css';

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="#home">Navbar</Link>
      <ul className="nav mr-auto">
        <li className="nav-item mr-2 border"><Link to="/" className="nav-link text-decoration-none">Home</Link></li>
        <li className="nav-item mr-2 border"><Link to="/about" className="nav-link text-decoration-none">About</Link></li>
        <li className="nav-item mr-2 border"><Link to="/services" className="nav-link text-decoration-none">Services</Link></li>
        <li className="nav-item mr-2 border"><Link to="/contact" className="nav-link text-decoration-none">Contact Us</Link></li>
        <li className="nav-item mr-2 border"><Link to="/pricing" className="nav-link text-decoration-none">Pricing</Link></li>
      </ul>
      <ul className="nav ml-auto">
        <li className="nav-item mr-2 border"><Link to="/CreateUser" className="nav-link text-decoration-none">Sign In</Link></li>
        <li className="nav-item mr-2 border"><Link to="/login" className="nav-link text-decoration-none">Login</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;
