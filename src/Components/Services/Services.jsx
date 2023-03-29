import React from 'react';
import './Services.css'; 
import images from "../../assets/image";

function Services() { 
    return( 
     <div className='container'>    
         <div className='servicescontainer'>

            <div className='servicesheading'>
                <span className='servicessubtext'>What we do</span>
                <h2 className='servicesmaintext'>Safe & Reliable Cargo Solutions</h2>
            </div>

            <div className='servicescontentcontainer'>
                 <div className='row'>

                    <div className='col-lg-6 servicescontent mb-5'>

                        <img src={images.seatransport} alt="sea-transport-icon" className='servicecontentimg' />

                        <div className='servicecontenttext'>
                            <h3 className='servicecontentmaintext'>Sea Transport Services</h3>
                             <p className='servicecontentsubtext'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
                        </div>
                    </div>

                    <div className='col-lg-6 servicescontent mb-5'>

                        <img src={images.warehousing} alt="warehousing-icon" className='servicecontentimg' />

                        <div className='servicecontenttext'>
                            <h3 className='servicecontentmaintext'>Warehousing Services</h3>
                            <p className='servicecontentsubtext'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
                        </div>
                    </div>
 
                    <div className='col-lg-6 servicescontent mt-5'>

                        <img src={images.airfright} alt="air-fright-icon" className='airfrighticon' />

                        <div className='servicecontenttext'>
                            <h3 className='servicecontentmaintext'>Air Fright Services</h3>
                            <p className='servicecontentsubtext'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
                        </div>
                    </div>

                    <div className='col-lg-6 servicescontent mt-5'>

                        <img src={images.localshipping} alt="local-shipping-icon" className='servicecontentimg' />

                        <div className='servicecontenttext'>
                            <h3 className='servicecontentmaintext'>Local Shipping Services</h3>
                            <p className='servicecontentsubtext'>Following the quality of our service <br /> thus having gained trust of our <br /> many clients.</p>
                        </div>
                    </div>

                 </div>

            </div>

         </div>
    </div>    
    )
}

export default Services; 