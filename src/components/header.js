import React from 'react';
import {Link,NavLink} from 'react-router-dom'
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';

const Header = () => {
  return (
    <>
    {/* Hello world */}
    <header>
      <h1>Welcome to Our Best Design Website</h1>
    </header>
    <nav>
      <Link to="/home">Home</Link>
      <Link to="/about">About Us</Link>
      <NavLink to="/contact">Contact</NavLink>
      
    </nav>
  </>
  );
}

export default Header;
