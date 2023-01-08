import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor: pointer;
`
const Image = styled.img`
    width: 100%;
    height: 202px;
`
const Details = styled.div`
    display: flex;
    margin-top: 16px;
    gap: 12px;
`
const ChannelImage = styled.img`
    width:36px;
    height: 36px;
    border-radius: 50%;
`
const Texts = styled.div`
    
`
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

const VideoCard = () => {
    return (
        <Container>
            <Image src="https://static-cse.canva.com/blob/951430/1600w-wK95f3XNRaM.jpg" />
            <Details>
                <ChannelImage src='https://i.pinimg.com/736x/b0/ce/89/b0ce89c349573bae1264017ce5deb3b7.jpg' />
                <Texts>
                    <Title>My first youtube video gone viral</Title>
                    <ChannelName>Mohit Kumar</ChannelName>
                    <Info>42458 views • 2 day ago</Info>
                </Texts>
            </Details>
        </Container>
    )
}

export default VideoCard