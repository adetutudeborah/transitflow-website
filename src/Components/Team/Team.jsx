import React from 'react';
import './Team.css'; 
import images from "../../assets/image";

function Team() {  
    return(
     <div className='teamcontainer'>    

            <div className="teamheading text-center">
                <span className='teamsubtext'>The Transporters</span>
                <h2 className='teammaintext'>Meet Expert Team</h2>
            </div> 

            <div className="companyteam row">

                <div className="team col-lg-3">
                     <img src={images.jessca} alt="team-image" className='team-image' />

                     <div className="teamprofile">
                        <p className="teamname">Jessica Arow</p>
                        <p className="teamrole">Designer</p>
                     </div>

                     <span className="socialicons jesssocialicon">
                        <span className="socialicon"><i class="fa-brands fa-twitter"></i></span>
                        <span className="socialicon"><i class="fa-brands fa-facebook"></i></span>
                        <span className="socialicon"><i class="fa-brands fa-instagram"></i></span>
                     </span>
                </div>

                <div className="team col-lg-3">
                     <img src={images.kathleen} alt="team-image" className='team-image' />

                     <div className="teamprofile">
                        <p className="teamname">Kathleen Smith</p>
                        <p className="teamrole">Designer</p>
                     </div>

                     <span className="socialicons">
                        <span className='socialicon'><i class="fa-brands fa-linkedin"></i></span>
                        <span className="socialicon"><i class="fa-brands fa-twitter"></i></span>
                        <span className="socialicon"><i class="fa-brands fa-facebook"></i></span>
                        <span className="socialicon"><i class="fa-brands fa-instagram"></i></span>
                     </span>
                </div>

                <div className="team col-lg-3">
                     <img src={images.rebecca} alt="team-image" className='team-image' />

                     <div className="teamprofile">
                        <p className="teamname">Rebecca Tylor</p>
                        <p className="teamrole">Designer</p>
                     </div>

                     <span className="socialicons rebocialicon">
                        <span className="socialicon"><i class="fa-brands fa-facebook"></i></span>
                        <span className="socialicon"><i class="fa-brands fa-instagram"></i></span>
                     </span>
                </div>

            </div>
    </div>     
    )
}

export default Team;