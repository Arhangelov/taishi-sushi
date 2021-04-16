import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
    background: transparent;
    display: flex;
    justify-content: center;

    position: absolute;
    width: 100%;
    height: 10vh;
    left: 51px;
    top: 20px;
    `;
    
    export const NavLink = styled(Link)`
    color: #E1B486;
    
    font-style: light;
    font-weight: normal;
    font-size: 1rem;
    
    line-height: 2rem;
    display: flex;
    align- items: center;
    text-decoration: none;
    cursor: pointer;
    padding-left: 55px;
    height: 50px;


    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;

export const logo = styled(Link)`
position: absolute;
width: 152px;
height: 60.27px;
left: 51px;
top: 31.73px;
cursor: pointer;
`