import React from 'react'

import { VideoContainer, VideoWrapper, Video, Info } from './styles'

interface Video {
  video: {
    id: {
    videoId: string;
  };
  snippet: {
    channelTitle: string;
    description: string;
    thumbnails: {
      high: { 
        url: string 
      }
    }
  }
  }
}

const MainVideo = ({ video }: Video) => {

  console.log(video)

  let videoSrc

  if(!video) { 
    return <h1>Loading...</h1>
  } else {
    videoSrc = `https://youtube.com/embed/${video.id.videoId}`
    console.log(videoSrc)
  }
  
  return (
    <VideoContainer>
      <VideoWrapper>
        <Video>
          <iframe frameBorder='0' width='100%' height='100%' title='Video Player' src={videoSrc} /> 
        </Video>
        <Info />
      </VideoWrapper>
    </VideoContainer>
  )
}

export default MainVideo
