import React, {useEffect, useState} from "react";
import {Link, useLocation} from 'react-router-dom';
import {setActiveItem} from '../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

function Header({setActiveItem}) {
    const [path, setPath] = useState('');
    const location = useLocation();

    useEffect(() =>{
        setPath(location.pathname.slice(1));
    },[])

    const handleClick = () => {
        setActiveItem(path);
    }

    const MenuItem = ({id, to,children}) => {
        return <Link id={id} to={to} onClick={handleClick} className={(path === '' && id === 'main') || id === path ? 'active' : ''}>{children}</Link>
    } 

    // console.log(state.getState());
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

  const mapStateToProps = (state) => {
          
    return {
        activeItem: state
    }
}
  
  export default connect(mapStateToProps, {setActiveItem})(Header);
  