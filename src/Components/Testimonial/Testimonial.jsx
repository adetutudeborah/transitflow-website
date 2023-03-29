import React from 'react';
import './Testimonial.css';  
import images from "../../assets/image";

function Testimonial() { 
    return(
     <div className='testimonialcontainer'>  

        {/* Testimonial heading   */}

        <div className='testimonialheading'>

             <span className='testimonialsubtitle'>Testimonial</span>

             <div className='titleheader'>
                <div>
                    <h3 className="testimonialtitle">What Our Customer Say</h3>
                </div>
               
                <div className='arrows'>
                     <span className='navicon'><img src={images.leftarrow} alt="left-arrow" className='leftarrow'/></span>
                     <span className='navicon'><img src={images.rightarrow} alt="right-arrow" className='rightarrow'/></span>
                </div>  
             </div>

        </div>

        {/* Testimonial Section */}

        <div className="testimonialinnercontainer">

            {/* First section */}

            <div className="firsttestimonialsection">

                <div className='usersection'>
                        <div className='userinfo'>
                            <div className="userimage">
                                <img src={images.smith} alt="user-image" className='userimage'/>
                            </div>
                            <div className="userprofile">
                                <p className="username">Kathleen Smith</p>
                                <p className="usercompany">Fuel Company</p>
                            </div>
                        </div>

                        <div className='commenticon'>
                            <img src={images.commenticon} alt="comment-icon" className='commenticon'/>
                        </div>
                </div>

                <div className="userreview">
                        <p className="review">
                        Leverage agile frameworks to provide a robust synopsis for 
                        strategy foster collaborative thinking to further the overall 
                        value proposition. Organically grow the holistic world view 
                        of disruptive innovation via workplace diversity and 
                        empowerment.
                        </p>
                </div>

                <div className='rating'>
                        <img src={images.ratingicon} alt="rating-icon" className='ratingicon'/>
                </div>

            </div>

            {/* Second Section */}

                 <div className="secondtestimonialsection">

                <div className='usersection'>
                        <div className='userinfo'>
                            <div className="userimage">
                                <img src={images.martin} alt="user-image" className='userimage'/>
                            </div>
                            <div className="userprofile">
                                <p className="username secondusername">John Martin</p>
                                <p className="usercompany secondusercompany">Restoration Company</p>
                            </div>
                        </div>

                        <div className='commenticon'>
                            <img src={images.commenticon} alt="comment-icon" className='commenticon'/>
                        </div>
                </div>

                <div className="userreview">
                        <p className="review secondreview">
                        Leverage agile frameworks to provide a robust synopsis for 
                        strategy foster collaborative thinking to further the overall 
                        value proposition. Organically grow the holistic world view 
                        of disruptive innovation via workplace diversity and 
                        empowerment.
                        </p>
                </div>

                <div className='rating'>
                        <img src={images.ratingicon} alt="rating-icon" className='ratingicon'/>
                </div>

            </div>

        </div>

    </div>    
    )
}

export default Testimonial;