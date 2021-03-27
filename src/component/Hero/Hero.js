import React from 'react'
import Navbar from '../Navbar/Navbar';
import { HeroContainer, Japan, Name, To, Welcome } from './HeroElements';

const Hero = () => {
    return (
        <HeroContainer>
            <Japan>よ う こ そ</Japan>
            <Welcome>WELCOME</Welcome>
            <To>to</To>
            <Name>TAISHI SUSHI</Name>
            <Navbar />
        </HeroContainer>
    )
}

export default Hero
