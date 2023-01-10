import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`
const Avatar = styled.img`
height: 40px;
  width: 40px;
  border-radius: 50%;
    `
const Details = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
const Name = styled.span`
font-size: 13px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`
const Date = styled.span`
font-size: 12px;
font-weight: 400;
color: ${({ theme }) => theme.textSoft};
margin-left: 5px;
`
const Text = styled.span`
font-size: 14px;
color: ${({ theme }) => theme.text};
`


const Comment = ({ comment }) => {
    return (
        <Container>
            <Avatar src={comment?.author?.avatar?.[0]?.url} />
            <Details>
                <Name>{comment?.author?.title}
                    <Date>{comment?.publishedTimeText}</Date>
                </Name>
                <Text>{comment?.content}</Text>
            </Details>
        </Container>
    )
}

export default Comment