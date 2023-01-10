import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import VideoCard from '../components/VideoCard'
import fetchData from '../utils/Api'

const Container = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

const Home = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const { contents } = await fetchData("search/?q=New");
      setVideos(contents);
    } catch (error) {
      console.error("fetchVideos" + error);
    }

  }

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <Container>
      {videos?.map((item) => {
        return (
          <VideoCard key={item.video.videoId} video={item.video} />)
      }
      )}
    </Container>
  )
}

export default Home