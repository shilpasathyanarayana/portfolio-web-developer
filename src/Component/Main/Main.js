import React from 'react'

import Intro from '../Intro/Intro'
import Technology from '../Technology/Technology';
// import Works from '../Works/Works';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navbar from '../NavBar/Navbar';


export default function Main() {
    return (
        <>
            <Navbar />
            <Intro />
            <Technology />
            {/* <Works /> */}
            <Contact />
            <Footer />
        </>
    )
}
