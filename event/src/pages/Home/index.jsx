import React from 'react'
import Service from './service'
import About from './About'
import WhyUs from './WhyUs'
import Gallery from './Gallery'
import Price from './Price'
import Testimonal from './Testimonal'
import Footer from './Footer'
const Home = () => {
  return (<>
  <div className='h-screen relative overflow-hidden'>
  <video autoPlay={true} playsInline loop muted className='object-cover p-0 m-0'>
    <source  src='assets/video.mp4.mp4'/>
  </video>
  <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-20'>
        <p className='2xl:text-[120px] text-[100px] font-extrabold'>
          <span className='text-transparent hover:text-secondary-50 text-stroke'>
            Fusion Events
          </span>
        </p>
          <span className='text-3xl font-bold text-secondary-50'>-Your Vision..Our Innovation..Event Solutions-</span>
      </div>
  </div>
  <Service/>
  <About/>
  <WhyUs/>
  <Gallery/>
  <Price/>
  <Testimonal/>
  <Footer/>
    </>

   
  )
}

export default Home