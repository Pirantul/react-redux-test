import React, {useState} from "react";
import {Link} from 'react-router-dom'

function Header() {
    const [activeItem, setActiveItem] = useState('');

    const handleClick = (event) => {
        setActiveItem(event.target.id);
    };

    const MenuItem = ({id, to,children}) => {
        return <Link id={id} to={to} onClick={handleClick} className={id === activeItem ? 'active' : ''}>{children}</Link>
    } 
    

    return (
        <header>
            <nav>
                <ul>
                    <li><MenuItem id='main' to='/'>main </MenuItem></li>
                    <li><MenuItem id='page1' to='/page1'>page1 </MenuItem></li>
                    <li><MenuItem id='page2' to='/page2'>page2 </MenuItem></li>
                    <li><MenuItem id='page3' to='/page3'>page3 </MenuItem></li>
                </ul>
            </nav>
        </header>
    );
  }
  
  export default Header;
  