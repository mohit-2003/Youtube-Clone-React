import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div`

`
const AddCommentBox = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Avatar = styled.img`
height: 40px;
  width: 40px;
  border-radius: 50%;
    `
const InputBox = styled.input`
border: none;
border-bottom: 1px solid ${({ theme }) => theme.soft};
background-color: transparent;
outline: none;
padding: 5px;
width: 100%;
`

const Comments = () => {
    return (
        <Container>
            <AddCommentBox>
                <Avatar src="https://i.pinimg.com/736x/b0/ce/89/b0ce89c349573bae1264017ce5deb3b7.jpg" />
                <InputBox placeholder="Add a comment..." />
            </AddCommentBox >
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments