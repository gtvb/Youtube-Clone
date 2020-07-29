import React, { useState, ChangeEvent, useEffect, FormEvent } from 'react';
import { Container, SearchWrapper, VideosWrapper, NoResults } from './Layout'
import GlobalStyles from './styles/GlobalStyles'

import Search from './components/Search';
import MainVideo from './components/MainVideo';
import VideoList from './components/VideoList';

import api from './services/api'

import youtubeCredentials from './config'

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

interface ApiResponse {
  items: Video[]
}

const App:React.FC = () => {

  const [inputValue, setInputValue] = useState<string>('')
  const [results, setResults] = useState<Video[]>([])
  const [selectedVideo, setSelectedVideo] = useState<Video>({} as Video)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  } 

  const handleVideoSelection = (video: Video) => {
    setSelectedVideo(video)
  }
 
  const handleSubmit = (q: string) => {

    // api.get<ApiResponse>('', {
    //   params: {
    //     part: 'snippet',
    //     q,
    //     maxResults: 5,
    //     key: youtubeCredentials.key
    //   }
    // })
    // .then(res => setResults(res.data.items))

    // setSelectedVideo(results[0])
    // setInputValue('')
  }

  useEffect(() => {
    handleSubmit('Learn React')
  })

  return (
    <Container>
      <SearchWrapper>
        <Search 
          inputValue={inputValue} 
          handleChange={handleChange} 
          handleSubmit={handleSubmit} 
        />
      </SearchWrapper>

      <VideosWrapper>
        {results.length !== 0 ? (
          <>
            <MainVideo video={selectedVideo} />
            <VideoList videos={results} handleVideoSelection={handleVideoSelection} />
          </>
        ) : (
          <NoResults>
            <i className='fas fa-search fa-4x' />
            <h3>Nothing yet...</h3>
          </NoResults>
        )}     
      </VideosWrapper>

      <GlobalStyles />
    </Container>
  );
}

export default App;
