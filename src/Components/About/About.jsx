import React from 'react';
import './About.css'; 
import images from "../../assets/image";

function About() { 
    return(
     <div className='aboutsection'>    
         <img src={images.aboutbackground} alt="about-backgroung-image" className='aboutbackgroundimg'/>

        <div className='aboutcontainer'>

            <div className='aboutinnercontainer'>

                <div className='aboutcontent'>
                        <span className='aboutcontenttext'>Why Us</span>
                        <h2 className='aboutcontentmaintext'>We provide full range global <br /> logistics solution</h2>
                        <p className='aboutcontentsubtext'>
                        Leverage agile frameworks to provide a robust synopsis for <br /> strategy foster collaborative thinking to further the overall <br /> value proposition. 
                        <br />
                        <br />
                        Organically grow the holistic world view of disruptive <br /> innovation via workplace diversity and empowerment.
                        </p>

                        <div className='aboutfeature'>
                            <img src={images.deliveryicon} alt="delivery-time-icon" className='featureicon'/>
                            <p className='featuretext'>Delivery on Time</p>
                        </div>

                        <div className='aboutfeature'>
                            <img src={images.costicon} alt="travel-cost-icon" className='featureicon'/>
                            <p className='featuretext'>Optimized Travel Cost</p>
                        </div>
                </div>

                <div className='aboutimage'>
                        <img src={images.aboutimage} alt="about-image" className=''/>
                </div>
            </div>
        </div>

        <div className='aboutcounter'>
                <div className='counter counterleft'>
                    <span className='number'>1294</span>
                    <span> <img src={images.countericon} alt="countericon" className='countericon' /> </span>
                    <span className='countercontent'>Delivered Packages</span>
                </div>

                <div className='counter'>
                    <span className='number'>3594</span>
                    <span> <img src={images.countericon} alt="countericon" className='countericon' /> </span>
                    <span className='countercontent'>Satisfied</span>
                </div>
        </div>
    </div>    
    )
}

export default About; 