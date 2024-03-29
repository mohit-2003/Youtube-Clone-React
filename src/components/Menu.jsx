import React from 'react'
import styled from 'styled-components'
import brandLogo from "../images/logo.png"
import { appName } from '../utils/Constants'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Link } from 'react-router-dom';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const Container = styled.div`
    flex: 1;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 100vh;
    color: ${({ theme }) => theme.text};
    font-size: 14px;
    position: sticky;
    top: 0;  
    overflow: auto;
`;

const Wrapper = styled.div`
padding: 18px 26px;
`;

const BrandLogo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
margin-bottom: 25px;
`;

const Icon = styled.img`
height: 25px;
`

const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: pointer;
padding: 7.5px 0px;
&:hover{
    background-color: ${({ theme }) => theme.soft};
    border-radius: 8px;
}
`

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({ theme }) => theme.soft};;
`

const LoginLayout = styled.div`
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
margin-top: 10px;
font-weight: 500;
`
const Heading = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
`
const Menu = ({ darkMode, setDarkMode }) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <BrandLogo>
                        <Icon src={brandLogo} />
                        {appName}
                    </BrandLogo>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <HomeIcon />
                        Home
                    </Item>
                </Link>
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <VideoLibraryOutlinedIcon />
                        Shorts
                    </Item>
                </Link>
                <Item>
                    <SubscriptionsOutlinedIcon />
                    Subscriptions
                </Item>
                <Hr />
                <Item>
                    <VideoLibraryOutlinedIcon />
                    Library
                </Item>
                <Item>
                    <HistoryOutlinedIcon />
                    History
                </Item>
                <Item>
                    <SmartDisplayOutlinedIcon />
                    Your videos
                </Item>
                <Item>
                    <WatchLaterOutlinedIcon />
                    Watch Later
                </Item>
                <Item>
                    <ThumbUpOutlinedIcon />
                    Liked videos
                </Item>
                <Hr />
                <LoginLayout>
                    Sign in to like videos, comment and subscribe
                    <LoginButton><AccountCircleOutlinedIcon />SIGN IN</LoginButton>
                </LoginLayout>
                <Hr />
                <Heading>Subscriptions</Heading>
                <Item>
                    <LibraryMusicOutlinedIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballOutlinedIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsOutlinedIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieOutlinedIcon />
                    Films
                </Item>
                <Hr />
                <Item>
                    <SettingsOutlinedIcon />
                    Settings
                </Item>
                <Item>
                    <FlagOutlinedIcon />
                    Report
                </Item>
                <Item>
                    <HelpOutlineOutlinedIcon />
                    Help
                </Item>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    <SettingsBrightnessOutlinedIcon />
                    {!darkMode ? "Dark Mode" : "Light Mode"}
                </Item>
            </Wrapper>
        </Container>
    )
}

export default Menu