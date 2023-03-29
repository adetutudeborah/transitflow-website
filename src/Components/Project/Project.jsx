import React, { useState }  from 'react';
import './Project.css'; 
import images from "../../assets/image";

function Project() {  

    const [projects] = useState([
        {
            id: 1,
            title:"Liquid Transportation",
            subtitle: "Premium Tankers",
            image: "/project/project-img-one.png",
        },
        {
            id: 2,
            title: "Packaging Solutions",
            subtitle: "Warehouse Management",
            image: "/project/project-img-two.png",
        },
        {
            id: 3,
            title:"Contract Logistics",
            subtitle: "Road Transportation",
            image: "/project/project-img-three.png",
        },
        {
            id: 4,
            title: "Warehouse & Distribution",
            subtitle: "Large Warehouse",
            image: "/project/project-img-four.png",
        },
        {
            id: 5,
            title: "Specialized Transport",
            subtitle: "Ocean Transports",
            image: "/project/project-img-five.png",
        },
    ]);

    return(
    <>
        <div className='projectcontainer'>   

                <h4 className='projectheading text-center'>Transporting Across The World</h4> 

                <div className="projectinnercontainer">

                    {projects.map((item) => (
                            <div className='projectsection'>

                                <img src={item.image} alt="project-image" className='projectimage'/>

                                <div className='projectinfo'>
                                    <p className='projecttext'>{item.title}</p>
                                    <p className='projectsubtext'>{item.subtitle}</p>
                                </div>
                            </div>
                            ))}    
                </div>
                
                <div className='text-center'>
                <a href='' alt='more-work-button' className='moreworkbtn'>More Work</a>
                </div>
        
        </div>    

        <div className="projectbgimage">
                <img src={images.projectbgimg} alt="project-bg-image" className='projectbgimg'/>
        </div>
    </>
    )
}

export default Project;