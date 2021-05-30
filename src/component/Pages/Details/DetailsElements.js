import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    gap: 3em;
    margin: 3% 
`

export const SushiImg = styled.img`
    width: 50vw;
    max-height: 70vh;
    border-radius: 30px;
`

export const SushiTitle = styled.h1`
    color: #e1b486;
    position: absolute;
    margin-left: 55%;
`

export const SushiDesc = styled.p`
    color: #e1b486;
    margin-left: 3%;
    margin-top: 13%;
    margin-right: 6%;
    font-size: 1.5em;
`

export const SushiPortion = styled.h3`
    color: #e1b486;
    position: absolute;
    margin-left: 57%;
    margin-top: 31%;
`

export const CartBtn = styled(Link)`
    position: absolute;
    text-decoration: none;
    margin-left: 69%;
    margin-top: 31%;
    padding-top: 0.5%;
    background-color: #842028;
    color: wheat;
    border-radius: 5px;
    width: 9vw;
    height: 4vh;
    text-align: center;
`