import React from 'react';
import './Hero.css'; 
  
function Hero() { 
    return(
     <div className='container'>    

       <div className='herocontainer'>

            <div className='menucontainer'>

                <div className='menu'>
                    <span className='menuitem'>Home</span>
                    <span><i class="fa-solid fa-pipe"></i></span>
                    <span className='menuitem'>About</span>
                    <span><i class="fa-sharp fa-solid fa-pipe"></i></span>
                    <span className='menuitem'>Pages<span className='downicon'><i class="fa-solid fa-chevron-down downicon"></i></span></span>
                    <span className='menuitem'>Project</span>
                    <span className='menuitem'>Contact</span>
                </div>

                <div className='menucontent'>
                    <span className='menucontentitem'><i class="fa-brands fa-instagram"></i></span>
                    <span className='menucontentitem'><i class="fa-brands fa-facebook"></i></span>
                    <span className='menucontentitem'><i class="fa-brands fa-twitter"></i></span>
                    <span className='menucontentitem'><i class="fa-brands fa-linkedin"></i></span>
                    
                </div>

                <div>
                     <a href='' alt='requestquotebtn' className='requestquote'>Request Quote</a>
                </div>

            </div>

            <div className='heroinnercontainer'>
                <div className='herosection'>
                    <span className='herosubtext'>Logistics and Supply Chain Solution</span>
                    <h1 className='heromaintext'>Your Gateway <br /> to any Destination <br />  in the World</h1>
                    <p className='herotext'>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
                    <a href='' alt='explore-button' className='explorebtn'>Explore More</a>
                </div>
            </div>
        </div>    
          
    </div>    
    )
}

export default Hero;