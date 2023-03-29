import React from 'react';
import './Chooseus.css'; 
import images from "../../assets/image";

function Chooseus() { 
    return(
     <div className='choosecontainer row'> 

        <div className="firstchoosesection col-lg-6">
            <img src={images.chooseimage} alt="choose-img" className='chooseimg'/>

            <div className='featuretag'>
                <div>
                   <img src={images.featuretagimg} alt="choose-feature-tag-icon" className='featuretagicon'/>
                </div>
                <div className='featuretagtext'>
                  <span className="featuretagtext">Moving your products <br /> across borders</span>
                </div>   
            </div>
        </div>

        <div className="secondchoosesection col-lg-6">

                <span className='choosetitle'>Why Choose</span>
                <h3 className="choosemaintitle">We create opportunity to <br /> reach potential</h3>
                <p className="choosesubmaintitle">
                    Leverage agile frameworks to provide a robust synopsis for <br /> 
                    strategy foster collaborative thinking to further the overall value <br /> 
                    proposition.
                </p>

                <div className="choosefeatures row">

                    <div className='choosefeature col-lg-6'>
                        <img src={images.safepackage} alt="choose-feature-icon" className='choosefeatureicon'/>
                        <p className='choosefeaturetext'>Safe Package</p>
                    </div>

                    <div className='choosefeature col-lg-6'>
                        <img src={images.ship} alt="choose-feature-icon" className='choosefeatureicon'/>
                        <p className='choosefeaturetext'>Ship Everywhere</p>
                    </div>

                    <div className='choosefeature col-lg-6'>
                        <img src={images.tracking} alt="choose-feature-icon" className='choosefeatureicon'/>
                        <p className='choosefeaturetext'>Global Tracking</p>
                    </div>

                    <div className='choosefeature col-lg-6'>
                        <img src={images.support} alt="choose-feature-icon" className='choosefeatureicon'/>
                        <p className='choosefeaturetext'>24/7 Support</p>
                    </div>

                    <div className='choosefeature col-lg-6'>
                        <img src={images.delivery} alt="choose-feature-icon" className='choosefeatureicon'/>
                        <p className='choosefeaturetext'>In Time Delivery</p>
                    </div>


                    <div className='choosefeature col-lg-6'>
                        <img src={images.pricing} alt="choose-feature-icon" className='choosefeatureicon'/>
                        <p className='choosefeaturetext'>Transparent Pricing</p>
                    </div>

                </div>
        </div>

    </div>    
    )
}

export default Chooseus; 