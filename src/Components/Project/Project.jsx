import React from 'react';
import './Project.css'; 
import images from "../../assets/image";

function Project() {  
    return(
     <div className='projectcontainer'>    
            <div className="projectinnercontainer">
                 <h4 className='projectheading text-center'>Transporting Across The World</h4>
            </div>

            <div className="projectbgimg">
                <img src={images.projectbgimg} alt="project-bg-image" className='projectbgimg'/>
            </div>
      
    </div>    
    )
}

export default Project;