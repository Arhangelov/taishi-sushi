import React from 'react';
import {Link} from 'react-router-dom';
// import styles from './Navbar.module.css';
import {NavLink, Nav} from './NavbarElements';
import { ReactComponent as Logo } from '../../resources/Logo.svg';


const Navbar = () => {
    return (
        <>
        <Link to="/">
            <Logo>
                <logo to='/'></logo>
            </Logo>
        </Link>

        {/* <nav>
            <ul>
                <a to="/order-now"><li>ORDER NOW</li></a>
                <a to="/menu"><li>MENU</li></a>
                <a to="/contact-us"><li>CONTACT US</li></a>
                <a to="/add"><li>+ADD</li></a>
                <a to="/register"><li>REGISTER</li></a>
                <a to="/login"><li>LOGIN</li></a>
            </ul>
        </nav> */}

            <Nav>
                <NavLink to='/order-now'>ORDER NOW</NavLink>
                <NavLink to='/menu'>MENU</NavLink>
                <NavLink to='/contact-us'>CONTACT US</NavLink>
                <NavLink to='/add'>+ADD</NavLink>
                <NavLink to='/register'>REGISTER</NavLink>
                <NavLink to='/login'>LOGIN</NavLink>
                <NavLink to='/logout'>LOGOUT</NavLink>
                
            </Nav>
        </>

    )
}

export default Navbar;