import React from 'react';
import { Nav, NavLink, logo } from './NavbarElements';
import { ReactComponent as Logo } from '../../resources/Logo.svg';


const Navbar = () => {
    return (
        <>
        {/* Трябва да измисля как да оправя логото за да redirect-ва към home страницата! */}
            <Logo>
                <logo to='/'></logo>
            </Logo>
            <Nav>
                <NavLink to='/order-now'>ORDER NOW</NavLink>
                <NavLink to='/menu'>MENU</NavLink>
                <NavLink to='/contact-us'>CONTACT US</NavLink>
                <NavLink to='/add'>+ADD</NavLink>
                
            </Nav>
        </>

    )
}

export default Navbar;