import React from 'react';
import './Header.css'; 
import images from "../../assets/image";

function Header() { 
    return(
     <div className='container'>    
        <div className='headercontainer'>

            <div className='logo'>
               <img src={images.logo} alt="logo" className='logo'/>
            </div>
            

            <div className='headerinnercontainer'>

                <div className='headerinfo'>
                    <img src={images.time} alt="time-icon" className=''/>  

                    <div className='headertext'>
                        <p>Mon - Sat 9.00 - 18.00</p> 
                        <p>Sunday Closed</p>
                    </div>
                    
                </div>

                <div className='headerinfo'>
                    <img src={images.email} alt="email-icon" className=''/>  

                    <div className='headertext'>
                        <p>Email</p> 
                        <p>contact@logistics.com</p>
                    </div>

                    
                </div>

                <div className='headerinfo'>
                    <img src={images.call} alt="call-icon" className=''/>  

                    <div className='headertext'>
                        <p>Call Us</p> 
                        <p>(00) 112 365 489 </p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>    
    )
}

export default Header;