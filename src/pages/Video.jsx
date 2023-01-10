import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';
import VideoCard from '../components/VideoCard';
import { useParams } from 'react-router-dom';
import fetchData from '../utils/Api';


const Container = styled.div`
  display: flex;
  gap: 24px;
`
const Content = styled.div`
  flex:5;
`
const VideoWrapper = styled.div``
const Title = styled.h1`
  font-size: 18px;
  font-weight:400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`
const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`
const Button = styled.div`
display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  border:0.5px solid ${({ theme }) => theme.soft};
  margin: 15px 0px;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 8px;
`
const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`
const ChannelName = styled.span`
  font-weight: 500;
`
const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`
const Description = styled.p`
  font-size: 14px;
`
const SubscribeButton = styled.button`
  background-color: #cc1a00;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`

const Recommendation = styled.div`
  flex:2;
`

// TODO: Use redux to save video details from hone page
const Video = () => {

  const { videoId } = useParams();
  const [video, setVideo] = useState({});
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    try {
      const res = await fetchData("video/details/?id=" + videoId);
      setVideo(res);
    } catch (error) {
      console.error(error);
    }
  }
  const fetchRelatedVideos = async () => {
    try {
      const { contents } = await fetchData("video/related-contents/?id=" + videoId);
      setRelatedVideo(contents);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="480"
            src="https://www.youtube.com/embed/YxWlaYCA8MU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </VideoWrapper>
        <Title>{video?.title}</Title>
        <Details>
          <Info>
            {video?.stats?.views || video?.stats?.viewers} views {video?.publishedTimeText && "• " + video?.publishedTimeText}
          </Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> {video?.stats?.likes}
            </Button>
            <Button>
              <ThumbDownOffAltOutlinedIcon /> Dislike
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <AddTaskOutlinedIcon /> Save
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <ChannelImage src={video?.author?.avatar[0]?.url} />
            <ChannelDetail>
              <ChannelName>{video?.author?.title}</ChannelName>
              <ChannelCounter>{video?.author?.stats?.subscribersText}</ChannelCounter>
              <Description>{video?.description}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </Channel>
        <Hr />
        <Comments />
      </Content>

      <Recommendation>
        {relatedVideo?.map((item) => {
          return (
            <VideoCard key={item.video.videoId} type="recommend" video={item.video} />
          )
        })}
      </Recommendation>

    </Container>
  )
}

export default Video