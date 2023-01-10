import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Comment from './Comment'
import { useParams } from 'react-router-dom';
import fetchData from '../utils/Api';

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
    const { videoId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments();
    }, [videoId]);

    const fetchComments = async () => {
        try {
            const { comments } = await fetchData("video/comments/?id=" + videoId);
            setComments(comments);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <Container>
            <AddCommentBox>
                <Avatar src="https://i.pinimg.com/736x/b0/ce/89/b0ce89c349573bae1264017ce5deb3b7.jpg" />
                <InputBox placeholder="Add a comment..." />
            </AddCommentBox >
            {comments?.map((comment) => {
                return (
                    <Comment key={comment?.commentId} comment={comment} />
                )
            })}
        </Container>
    )
}

export default Comments