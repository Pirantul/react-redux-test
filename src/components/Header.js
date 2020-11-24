import React from 'react';

const { Link } = require("react-router-dom");

function Header() {
  
    return (
        <header>
            <Link to='/'>Main </Link>
            <Link to='/about'>About </Link>
        </header>
    );
  }
  
  export default Header;
  