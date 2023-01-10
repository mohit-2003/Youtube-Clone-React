import React from 'react'
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Comments from '../components/Comments';
import VideoCard from '../components/VideoCard';


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
const Video = () => {

  
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
        <Title>My first youtube video gone viral</Title>
        <Details>
          <Info>
            42458 views • 2 day ago
          </Info>
          <Buttons>
            <Button>
              <ThumbUpOutlinedIcon /> 123
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
            <ChannelImage src='https://i.pinimg.com/736x/b0/ce/89/b0ce89c349573bae1264017ce5deb3b7.jpg' />
            <ChannelDetail>
              <ChannelName>Mohit Kumar</ChannelName>
              <ChannelCounter>56K subscribers</ChannelCounter>
              <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. At quas, optio amet, officia voluptas consectetur illum molestiae assumenda a aliquid dolore dolorum eligendi! Distinctio commodi debitis dignissimos. Dolorem, magnam saepe eaque voluptates harum sunt optio beatae corrupti, aspernatur recusandae hic. Nam cum quo magni necessitatibus. Nam, animi! Quasi laudantium deserunt, excepturi itaque dignissimos qui! Cum, iure.</Description>
            </ChannelDetail>
          </ChannelInfo>
          <SubscribeButton>SUBSCRIBE</SubscribeButton>
        </Channel>
        <Hr />
        <Comments />
      </Content>

      <Recommendation>
        <VideoCard type="recommend" />
        <VideoCard type="recommend" />
        <VideoCard type="recommend" />
        <VideoCard type="recommend" />
        <VideoCard type="recommend" />
        <VideoCard type="recommend" />
      </Recommendation>

    </Container>
  )
}

export default Video