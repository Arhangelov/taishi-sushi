import {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../services/Logout';

import {NavLink, Nav, NavLogo, Container} from './NavbarElements';
import { ReactComponent as Logo } from '../../resources/Logo.svg';
import {Context} from '../../UserContext/UserContext' 

const Navbar = () => {
    const [user, setUser] = useContext(Context);

    const handlerLogout = () => {
        return logout()
            .then(() => {
                return setUser({username: '', _id: ''})
            }).catch(err => console.log(err))
    };

     const checkAdmin = (id) => {
         const adminId = '6099204089d29d073c9875af';
         
         if(id == adminId) return  <NavLink to='/add'>+ADD</NavLink>
         return '';

         
     }
    
    return (
        <Container>
        <NavLogo>
        <Link to="/">
            <Logo>
                <logo to='/'></logo>
            </Logo>
        </Link>
        </NavLogo>

            <Nav>
                <NavLink to='/order-now'>ORDER NOW</NavLink>
                <NavLink to='/menu'>MENU</NavLink>
                <NavLink to='/contact-us'>CONTACT US</NavLink>

                {checkAdmin(user._id)}
                
              {user.username
                ?  <>
                    <NavLink to='' onClick={handlerLogout}>LOGOUT</NavLink>
                    <NavLink to='/profile'>{user.username}</NavLink>
                    </>
                 : <>
                    <NavLink to='/register'>REGISTER</NavLink>,
                    <NavLink to='/login'>LOGIN</NavLink>
                    </> 
              }
            </Nav>
        </Container>

    )
}

export default Navbar;