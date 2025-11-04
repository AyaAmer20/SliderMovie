import React,{useRef,useEffect,useState} from 'react'
import './App.css'
import {motion} from 'framer-motion';
import Carousel from './Carousel/Carousel.js';
import images from './Carousel/Carousel.js'

const App = () => {
  const [width,setWidth]=useState(0)
  const carouselRef=useRef();
  useEffect(()=>{
    //console.log(carouselRef.current.scrollWidth)//هنحدد width اللى موجود فى items 
    //console.log(carouselRef.current.offsetWidth)//هنحدد width اللى موجود فى items 
    setWidth(carouselRef.current.scrollWidth-carouselRef.current.offsetWidth)
  },[])
  return (
    <>
    <div className='netflix'><h1>Netflix</h1></div>
    <motion.div className='Carousel' ref={carouselRef}>//بدل vinlle css
      <motion.div className='inner_Carousel' drag='x' dragConstraints={{right:0, left:-width}}>
        
        {images.map((image)=>{
          return <motion.div className='items' key={image}>
            <img src={image} alt='Carousel-img' />

          </motion.div>
        }
        )}
        
        

      </motion.div>

    </motion.div>
   
    </>
  )
}

export default App