import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Container = styled.div`
    width: ${({ type }) => type !== "recommend" && "360px"};
    margin-bottom: ${({ type }) => type === "recommend" ? "10px" : "45px"};
cursor: pointer;
display: ${({ type }) => type === "recommend" && "flex"};
gap: 10px;
`
const Image = styled.img`
width: 100%;
height: ${({ type }) => type === "recommend" ? "120px" : "202px"};
flex: 1;
`
const Details = styled.div`
display: flex;
margin-top: ${({ type }) => type !== "recommend" && "16px"};
gap: 12px;
flex: 1;
`
const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
display: ${({ type }) => type === "recommend" && "none"};
`
const Texts = styled.div``
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text}
`
const ChannelName = styled.h2`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
margin: 9px 0px;
`
const Info = styled.div`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
`

const VideoCard = ({ type, video }) => {
    console.log(video);
    return (
        <Link to={`/video/${video.videoId}`} style={{ textDecoration: "none" }}>
            <Container type={type}>
                <Image type={type} src={video?.thumbnails[0]?.url} />
                <Details type={type}>
                    <ChannelImage type={type} src={video?.author?.avatar[0]?.url} />
                    <Texts>
                        <Title>{video?.title}</Title>
                        <ChannelName>{video?.author?.title}</ChannelName>
                        <Info>{video?.stats?.views || video?.stats?.viewers} views {video.publishedTimeText && "• " + video?.publishedTimeText}</Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default VideoCard