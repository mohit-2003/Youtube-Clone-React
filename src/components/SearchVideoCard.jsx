import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    margin-bottom: 30px;
    cursor: pointer;
    display: flex;
    gap: 16px;
`
const Image = styled.img`
    height: 190px;
    flex: 1;
    border-radius: 16px;
`
const Details = styled.div`
    display: flex;
    margin-top: ${({ type }) => type !== "recommend" && "16px"};
    flex: 4;
`

const Texts = styled.div`
`
const Title = styled.h2`
    font-size: 1.2rem;
    font-weight: 400;    
    overflow: hidden;
    line-clamp: 2;
    color: ${({ theme }) => theme.text}
`
const Description = styled.div`
    font-size: 0.7rem;
    font-weight: 400;    
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.textSoft};
    margin-top: 16px;
`
const Info = styled.div`
    font-size: 0.7rem;
    margin-top: 8px;
    color: ${({ theme }) => theme.textSoft};
`
const ChannelDetails = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
    align-items: center;
`
const ChannelImage = styled.img`
    width: 24px;
    height: 24px;
    border-radius: 50%;
`
const ChannelName = styled.h2`
    font-size: 0.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
`

const SearchVideoCard = ({ video }) => {
    return (
        <Link to={`/video/${video?.videoId}`} style={{ textDecoration: "none" }}>
            <Container >
                <Image src={video?.thumbnails[0]?.url} />
                <Details>
                    <Texts>
                        <Title>{video?.title}</Title>
                        <Info>{video?.stats?.views || video?.stats?.viewers} views {video?.publishedTimeText && "• " + video?.publishedTimeText}</Info>
                        <ChannelDetails>
                            <ChannelImage src={video?.author?.avatar[0]?.url} />
                            <ChannelName>{video?.author?.title}</ChannelName>
                        </ChannelDetails>
                        <Description>{video?.descriptionSnippet + video?.descriptionSnippet + video?.descriptionSnippet}</Description>
                    </Texts>
                </Details>
            </Container>
        </Link>
    )
}

export default SearchVideoCard