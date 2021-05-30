import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Cart = styled(Link)`
    text-decoration: none;
    background: #161616;
    border-radius: 23px;
    width:100%;
    height:100%;
    text-align:center;
    cursor: pointer;
`

export const SetImage = styled.img `
    /* clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%); */
    border-radius:20px 20px 20px 0;
    max-width: 60vw;
    max-height: 30vh; 
`

export const SetPrice = styled.h4`
    position: absolute;
    background-color: #9F3434;
    border-radius: 8px;
    color: whitesmoke;
    width: 10%;
    margin-top: -1%;
    text-align: center;
    z-index: 1;
`

export const SetTitle = styled.h5`
    color: darkgrey;
    font-style: italic;
`

export const SetPortion = styled.h5`
display: inline;
margin-right: 3em;
color: darkgray;
`

export const CartBtn = styled.button`
    color: #e1b486;
    background-color:#9F3434;
    width: 6vw;
    height: 4vh; 
    border: 3px;
    border-radius: 6px;
    font-size: 0.8em;
    cursor:pointer;
    
`