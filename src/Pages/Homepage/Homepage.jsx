import React from 'react';
import './Homepage.css'; 
import Header from '../../Components/Header/Header';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Services/Services';
import About from '../../Components/About/About';
import Project from '../../Components/Project/Project';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Chooseus from '../../Components/Chooseus/Chooseus';
import Team from '../../Components/Team/Team';
import Contact from '../../Components/Contact/Contact';
import Blog from '../../Components/Blog/Blog';
import Footer from '../../Components/Footer/Footer';

function Homepage() { 
    return(
     <div>    
        <Header />
        <Hero />
        <Services />
        <About />
        <Project />
        <Testimonial />
        <Chooseus />
        <Team />
        <Contact />
        <Blog />
        <Footer />
    </div>    
    )
}

export default Homepage;