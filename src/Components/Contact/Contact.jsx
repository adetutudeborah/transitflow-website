import React from 'react';
import './Contact.css'; 
import images from "../../assets/image"; 

function Contact() { 
    return(
     <div className='contactcontainer'> 

            <div className="contactinnercontainer"> 
                
                <div className="contactcontent">
                                <span className='contacttext'>Contact</span>
                                <h2 className='contactmaintext'>Get in touch with us</h2>
                                <p className='contactsubtext'>
                                        Leverage agile frameworks to provide a robust <br /> 
                                        synopsis for strategy foster collaborative <br /> 
                                        thinking to further the overall value.
                                </p>

                        <div className='contactdetails'>

                                <div className='contactinfo'>
                                    <img src={images.email} alt="email-icon" className=''/>  

                                    <div className='contacttime'>
                                        <p>Email</p> 
                                        <p>contact@logistics.com</p>
                                    </div>
                
                                </div>

                                <div className='contactinfo'>
                                    <img src={images.call} alt="call-icon" className=''/>  

                                    <div className='contacttime'>
                                        <p>Call Us</p> 
                                        <p>(00) 112 365 489 </p>
                                    </div>
                                    
                                </div>

                                <div className='contactinfo'>
                                    <img src={images.time} alt="time-icon" className=''/>  

                                    <div className='contacttime'>
                                        <p>Mon - Sat 9.00 - 18.00</p> 
                                        <p>Sunday Closed</p>
                                    </div>
                            
                                </div>
                    </div>
                </div>

                <div className="contactform">
                <form>
                        <div class="row">

                            <div class="col-md-6">
                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="text"
                                            id="nameInput"
                                            placeholder="Your Name*" 
                                            name="Full name"
                                            required 
                                        />
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">

                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="email"
                                            id="emailInput"
                                            placeholder="Email*" 
                                            name="Email"
                                            required 
                                        />
                                    </div>
                                </div> 

                            </div>

                            <div class="col-md-6">

                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="text"
                                            id="phoneNumberInput"
                                            placeholder="Phone Number*" 
                                            name="Phonenumber"
                                            required 
                                        />
                                    </div>
                                </div> 

                            </div>

                            <div class="col-md-6">

                                <div className="formgroup mt-3 mb-3">
                                    <div className="inputcontainer"> 
                                        <input
                                            className="inputbox"
                                            type="text"
                                            id="cityInput"
                                            placeholder="City*" 
                                            name="City"
                                            required 
                                        />
                                    </div>
                                </div> 

                            </div>
                        </div>

                        <div className="form-group">
                            <textarea 
                            className="mt-3 textarea" 
                            rows="6" 
                            placeholder="Your Message" 
                            name="Message" 
                            required>
                            </textarea>
                        </div>
                    
                        <div className='mt-4'>
                            <a href="" className='contactbtn'>Submit Message</a>
                        </div>
                    </form>
                </div>
            </div>  

            <div className="clientlogocontainer text-center">
                <img src={images.clientone} alt="client-logo" className='clientlogo'/>
                <img src={images.clienttwo} alt="client-logo" className='clientlogo'/>
                <img src={images.clientthree} alt="client-logo" className='clientlogo'/>
                <img src={images.clientfour} alt="client-logo" className='clientlogo'/>
                
            </div>
    </div>    
    )
}

export default Contact;