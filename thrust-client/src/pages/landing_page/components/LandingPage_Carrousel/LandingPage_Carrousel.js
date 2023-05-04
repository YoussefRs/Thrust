import React from 'react'
import './LandingPage_Carrousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';


function LandingPage_Carrousel() {

   const carouselOption = {
        showArrows : true,
        autoPlay : true,
        showThumbs: false,
        transitionTime: 2000,
        infiniteLoop : true
    }


  return (
    <div className="carousel-container">
        <Carousel {...carouselOption} className='carousel'>
            <div className='carousel-items'>
                <img src="https://via.placeholder.com/600x400/333333/ffffff?text=Slide+1" alt="Slide 1" />
                <p className="legend">Slide 1</p>
            </div>
            <div className='carousel-items'>
            <img src="https://via.placeholder.com/600x400/333333/ffffff?text=Slide+1" alt="Slide 2" />
            <p className="legend">Slide 2</p>
            </div>
            <div className='carousel-items'>
            <img src="https://via.placeholder.com/600x400/333333/ffffff?text=Slide+1" alt="Slide 3" />
            <p className="legend">Slide 3</p>
            </div>
        </Carousel>
    </div>

    
  )
}

export default LandingPage_Carrousel
