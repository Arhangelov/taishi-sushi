import React from 'react'

import Hero from '../../Hero/Hero';
import Products from '../../Products/Products';
// import Navbar from '../../Navbar/Navbar';

const HomePage = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Hero />
            <Products heading='Chose your favorite set' />
        </>
    )
}

export default HomePage