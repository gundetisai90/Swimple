import React from 'react';
import NavBar from '../Components/Navbar';
import Footer from '../Components/Footer';

import BasicExample from '../Components/Accordian';
import Team from '../Components/Team';

const About = () => {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <div>
                <BasicExample/>
            </div>
            <div>
                <Team/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default About;
