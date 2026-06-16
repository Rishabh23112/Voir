import React, { useRef, useState } from 'react'
import Button from './Button'

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClicked, setHasClicked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos=3;

  const videoRef = useRef(null)
  
  const handleVideoLoad=()=>{
    setLoadedVideos((prev)=>prev+1)
  }

  const nextVideo=(currentIndex % totalVideos)+1
  const MiniVideo=()=>{
    setHasClicked(true)

    setCurrentIndex(nextVideo)

  }



  const videoSrc=(idx)=>`videos/hero-${idx}.mp4`
  

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>

      <div id='video-frame' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>


        <div>
          <div className='mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg'>

            <div onClick={MiniVideo} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
              <video ref={videoRef} src={videoSrc(nextVideo)} loop muted 
              id='current-video' className='size-64 origin-center scale-150 object-cover object-center'
              
              onLoadedData={handleVideoLoad}/>
            </div>

          </div>


          <video 
          ref={videoRef}
          src={videoSrc(currentIndex)} loop muted id='next-video' className='absolute absolute-center invisible z-20 size-64 object-cover object-center'
          onLoadedData={handleVideoLoad}/>

          <video
          src={videoSrc(currentIndex===totalVideos-1 ? 1 : currentIndex)} autoPlay loop muted className='absolute left-0 top-0 size-full object-cover object-center'/>
        </div>
        <h1 className='hero-heading special-font absolute bottom-5 right-5 z-40 text-white'>G<b>a</b>ming</h1>

        <div className='absolute left-0 top-0 z-40 size-full'>

        <div className='mt-24 px-5 sm:px-10'>
          <h1 className='hero-heading special-font text-white'>Redefi<b>n</b>e</h1>

          <p className='mb-5 max-w-64 font-robert-regular text-white'>Enter the Metagame Layer <br/>Unleash the Play Economy</p>

          <Button/>
        </div>
        </div>
        

        
        
        

      </div>
    </div>
  )
}

export default Hero