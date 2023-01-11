import React, { useState } from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { SearchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
position: sticky;
top: 0;
background-color: ${({ theme }) => theme.bgLighter};
height: 56px;
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0px 20px;
    height: 100%;
    justify-content: flex-end;
    position: relative;
`
const Search = styled.div`
position: absolute;
width: 40%;
left:0;
right: 0;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 0.2px solid ${({ theme }) => theme.textSoft};
border-radius: 40px;
`
const Input = styled.input`
    border: none;
    background-color: transparent;
    padding-left: 8px;
    outline: none;
    color: ${({ theme }) => theme.text};
    
`
const LoginButton = styled.button`
display: flex;
align-items: center;
gap: 5px;
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color:  #3ea6ff;
border-radius: 3px;
cursor: pointer;
font-weight: 500;
`
const SearchOutlinedIcon = styled(SearchOutlined)`
  color: ${props => props.theme.text};
  padding-right: 8px;
  cursor: pointer;
`;

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();
    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "btnClick") &&
            searchQuery?.length > 0
        ) {
            navigate(`/search-results/${searchQuery}`);
        }
    };
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder='Search' onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler} value={searchQuery} />
                    <SearchOutlinedIcon onClick={() => searchQueryHandler("btnClick")} />
                </Search>
                <LoginButton><AccountCircleOutlinedIcon /> SIGN IN</LoginButton>
            </Wrapper>
        </Container>
    )
}

export default Navbar