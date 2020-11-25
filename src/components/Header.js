import React from 'react';

const { Link } = require("react-router-dom");

function Header() {
  
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Main </Link></li>
                    <li><Link to='/page1'>page1 </Link></li>
                    <li><Link to='/page2'>page2 </Link></li>
                    <li><Link to='/page3'>page3 </Link></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;
  