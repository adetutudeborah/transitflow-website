import React from 'react';
import './Footer.css'; 
import images from "../../assets/image"; 

function Footer() { 
    return(
        <div className='footercontainer'>    
            
                <div className="footerimage">
                    <img src={images.footerimg} alt="footer-img" className='footerimage' />
                </div>

                <div className="footerheading">
                    
                    <span><img src={images.logo} alt="footer-logo-img" className='footerlogoimage' /></span> 
                    <span className='mt-5 mb-5 footertitle footertitlep'>Pages</span>
                    <span className='mt-5 mb-5 footertitle'>Utility</span>
                    <span className='mt-5 mb-5 footertitle'>Subscribe</span>
          
                </div>

            <div className="footerinnercontainer">

                {/* Each Footer Section */}
                        <div className="footersection transitflow">
                        

                            <div className="footeritems">

                                <p className='footertext'>
                                        Leverage agile frameworks to provide a robust <br /> 
                                        synopsis for strategy foster collaborative <br /> 
                                        thinking to further the overall value <br />
                                        proposition.
                                </p>

                                <div className='footerdetails'>

                                        <div className='footerinfo'>
                                            <img src={images.email} alt="email-icon" className=''/>  

                                            <div className='footertime'>
                                                <p>Email</p> 
                                                <p>contact@logistics.com</p>
                                            </div>
                        
                                        </div>

                                        <div className='footerinfo'>
                                            <img src={images.call} alt="call-icon" className=''/>  

                                            <div className='footertime'>
                                                <p>Call Us</p> 
                                                <p>(00) 112 365 489 </p>
                                            </div>
                                            
                                        </div>
                                </div>
                            </div>
                        </div>

                         {/* Each Footer Section */}

                        <div className="footersection aboutfootersection">

                                <div className="footerlist">
                                    <p>About Us</p>
                                    <p>Our Teams</p>
                                    <p>Our Projects</p>
                                    <p>Pricing</p>
                                    <p>Contact</p>
                                </div>
                        </div>

                         {/* Each Footer Section */}

                        <div className="footersection utilityfootersection">

                                <div className="footerlist">
                                    <p>Style Guide</p>
                                    <p>Changelog</p>
                                    <p>Licenses</p>
                                    <p>Protected</p>
                                    <p>Not Found</p>
                                </div>
                        </div>

                         {/* Each Footer Section */}

                        <div className="footersection subscribefootersection">

                                <form>
                                    <div className="formgroup">
                                        <div className="inputcontainer"> 
                                            <input
                                                className="inputbox"
                                                type="email"
                                                id="emailInput"
                                                placeholder="Email here*" 
                                                name="Email"
                                                required 
                                            />
                                        </div>
                                    </div> 
                                </form>

                                <div className="subcribelinks">

                                    <div className='mt-4'>
                                           <a href="" className='subscribebtn'>Send Now</a>
                                   </div>

                                      <div className="footersocialicons">
                                            <span className='footersocialicon'><i class="fa-brands fa-linkedin"></i></span>
                                            <span className='footersocialicon'><i class="fa-brands fa-twitter"></i></span>
                                            <span className='footersocialicon'><i class="fa-brands fa-facebook"></i></span>
                                      </div>
                                </div>
                        </div>

                    </div>
                
                    <div className="copyrightcontainer">
                         
                         <div className="copyrighttext">
                            <p className="copyrighttitle">Copyright © TransitFlow | Designed by VictorFlow - Powered by Webflow.</p>
                         </div>

                         <div className="copyrightlistitem">
                             <span className="copyrightitem">Style Guide</span>
                             <span className="copyrightitem">Licenses</span>
                             <span className="copyrightitem">Changelog</span>
                             <span className="copyrightitem">Password</span>
                         </div>
                    </div>

        </div>    
    ) 
}

export default Footer;