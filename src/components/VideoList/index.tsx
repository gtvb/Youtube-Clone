import React from 'react'

import { ListContainer, ListWrapper, Miniature } from './styles'

interface Video {
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

interface Props {
  videos: Video[];
  handleVideoSelection(video: Video): void;
}

const VideoList:React.FC<Props> = ({ videos, handleVideoSelection }) => {

  return (
    <ListContainer>
      <ListWrapper>
        {videos.map(video => (
          <Miniature onClick={() => handleVideoSelection(video)} key={video.id.videoId} />
        ))}
      </ListWrapper>
    </ListContainer>
  )
}

export default VideoList