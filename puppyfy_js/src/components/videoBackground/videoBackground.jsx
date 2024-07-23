import React from 'react'
import videoBg from '../assets/videoBackground.mp4'

function VideoBack() {
  return (
    <div className='videoBackground'>
      <video className='videoBg' src={videoBg} autoPlay loop muted></video>
    </div>
  )
}

export default VideoBack