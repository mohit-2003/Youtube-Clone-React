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


const Comment = () => {
    return (
        <Container>
            <Avatar src="https://i.pinimg.com/736x/b0/ce/89/b0ce89c349573bae1264017ce5deb3b7.jpg" />
            <Details>
                <Name>Rishav Kumar
                    <Date>1 day ago</Date>
                </Name>

                <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non perspiciatis inventore veritatis. Aperiam dolores cum deleniti ab consequuntur minima autem, provident illo quasi minus nobis ea maiores! Nam, culpa? Vitae iste est quas ea nulla!</Text>
            </Details>
        </Container>
    )
}

export default Comment