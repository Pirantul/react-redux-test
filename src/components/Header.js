import React, {useEffect, useState} from "react";
import {NavLink} from 'react-router-dom';
import {setActiveItem} from '../actions';
import {connect, useSelector} from 'react-redux';

function Header() {

    const NavLinkItem = ({to, children}) => {
        return <NavLink exact to={to}>{children}</NavLink>
    } 

    return (
        <header>
            <NavLinkItem to='/'>Tasks</NavLinkItem>
            <NavLinkItem to='/page1'>page1 </NavLinkItem>
            <NavLinkItem to='/page2'>page2 </NavLinkItem>
            <NavLinkItem to='/page3'>page3 </NavLinkItem>
        </header>
    );
  
}
  
  export default (Header);
  