import React from 'react'
import ImageSlider from '../components/ImageSlider'

function Home() {
  return (
    <div id='home' className='relative h-screen w-full overflow-hidden'>
      
      {/* Background image slider */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <ImageSlider />
      </div>

      {/* Overlay content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center font-[Neue_Montreal] backdrop-blur-xs'>
        <h3 className='text-2xl font-bold mt-[10px]'>Welcome to</h3>
        <h1 className='text-[12vw] leading-none uppercase font-extrabold mt-4'>Chandigarh <br /> </h1>
          <h2 className='text-[5vw] font-bold -pt-4'>The City Beautiful</h2>
       
        <a
          href="#places"
          className='mt-8 h-[9vh] w-[30vh] rounded-full bg-[#457b9d] hover:bg-transparent hover:border hover:border-white text-xl font-light text-white flex items-center justify-center transition-all duration-300'
        >
          Explore Now
        </a>
      </div>
    </div>
  )
}

export default Home
