import React from 'react';
import './Blog.css'; 
import images from "../../assets/image"; 

function Blog() { 
    return(
        <div className='blogcontainer'>  

            {/* Blog heading */}

            <div className="blogheading text-center">
                <span className='blogtext'>Our Blog</span>
                <h2 className='blogmaintext'>Our Latest News</h2>
            </div>

             {/* Blog Section */}
            
            <div className="blogsection">

                <div className="bloginnercontainer "> 

                    <div className="blogimage">
                        <img src={images.blogimgone} alt="blog-img" className='blogimg' />
                    </div>

                    <div className="blogcontentcontainer">
                        <div className='blogimage text-center'>
                            <img src={images.calendar} alt="calendar-img" className='calendarimg' />
                            <p className='date'>08</p>
                            <p class='month text-center'>September</p>
                        </div>      

                        <div className='blogcontent'>
                            <h3 className='blogmainheading mb-3'>Inland freight a worthy <br /> solution for your business</h3>
                            <p className='blogsubheading mb-3'>We are dedicated in creating added value <br />
                                                        for our customers by implementing modern <br />
                                                        technology in our work. 
                            </p>
                            
                            <div className='bloglist'>
                                <ul>
                                    <li className='bloglistitem mb-2'>Urgent transport solutions</li>
                                    <li className='bloglistitem mb-2'>Reliable & experienced staffs</li>
                                    <li className='bloglistitem mb-2'>Urgent transport solutions</li>
                                    <li className='bloglistitem mb-2'>Reliable & experienced staffs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


                 <div className="bloginnercontainer "> 

                    <div className="blogimage">
                        <img src={images.blogimgtwo} alt="blog-img" className='blogimg' />
                    </div>

                    <div className="blogcontentcontainer">
                        <div className='blogimage text-center'>
                            <img src={images.calendar} alt="calendar-img" className='calendarimg' />
                            <p className='date'>12</p>
                            <p class='month text-center'>September</p>
                        </div>      

                        <div className='blogcontent'>
                            <h3 className='blogmainheading secondblogheading mb-3'>How technology can help <br /> redraw the supply chain map</h3>
                            <p className='blogsubheading mb-3'>We are dedicated in creating added value <br />
                                                        for our customers by implementing modern <br />
                                                        technology in our work. 
                            </p>
                            
                            <div className='bloglist'>
                                <ul>
                                    <li className='bloglistitem mb-2'>Urgent transport solutions</li>
                                    <li className='bloglistitem mb-2'>Reliable & experienced staffs</li>
                                    <li className='bloglistitem mb-2'>Urgent transport solutions</li>
                                    <li className='bloglistitem mb-2'>Reliable & experienced staffs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                 <div className="bloginnercontainer "> 

                    <div className="blogimage">
                        <img src={images.blogimgthree} alt="blog-img" className='blogimg' />
                    </div>

                    <div className="blogcontentcontainer">
                        <div className='blogimage text-center'>
                            <img src={images.calendar} alt="calendar-img" className='calendarimg' />
                            <p className='date'>25</p>
                            <p class='month text-center'>September</p>
                        </div>      

                        <div className='blogcontent'>
                            <h3 className='blogmainheading mb-3'>Five things you should have <br /> ready for your broker</h3>
                            <p className='blogsubheading mb-3'>We are dedicated in creating added value <br />
                                                        for our customers by implementing modern <br />
                                                        technology in our work. 
                            </p>
                            
                            <div className='bloglist'>
                                <ul>
                                    <li className='bloglistitem mb-2'>Urgent transport solutions</li>
                                    <li className='bloglistitem mb-2'>Reliable & experienced staffs</li>
                                    <li className='bloglistitem mb-2'>Urgent transport solutions</li>
                                    <li className='bloglistitem mb-2'>Reliable & experienced staffs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             {/* Blog Section */}

             {/* Blog Button */}

             <div className='mt-2 text-center'>
                <a href="" className='blogbtn'>More Blog</a>
             </div>
        </div>    
    )
}

export default Blog; 