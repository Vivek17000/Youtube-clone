// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
import Hell from "../Logo/logo.png"
import HomeIcon from "@mui/icons-material/Home"
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ExploreIcon from '@mui/icons-material/Explore';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex:1;
    background-color: ${({theme})=>theme.bgLighter};
    height:100vh;
    color: ${({theme})=>theme.text};
    font-size:14px;
   position: sticky;
   top: 0;
`;

const Wrapper = styled.div`
   padding:18px 26px;
`;

const Logo = styled.div`
   display:flex;
   align-items:center;
   gap:5px;
   font-weight:bold;
   margin-bottom:25px;
`;

const Img = styled.img`
  height:25px;
`;

const Item = styled.div`
  display:flex;
  align-items:center;
  gap:20px;
  cursor:pointer;
  padding: 7.5px 0px;

  &:hover{
    background-color: ${({ theme }) => theme.soft};
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border : solid 0.5px ${({theme})=>theme.soft};
`;

const Login = styled.div`
  
`
const Button = styled.button`
  padding:5px 15px;
  background-color: transparent;
  border : solid 1px #3ea6ff;
  color: #3ea6ff;
  border-radius : 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor:pointer;
  display: flex;
  align-items: center;
  gap:5px;
`

const Title = styled.h2`
font-size: 14px;
font-weight:500;
color: #aaaaa;
margin-bottom: 20px;
  
`

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
           <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
          <Logo>
            <Img src={Hell} />HellTube
          </Logo>
            </Link>
          <Item>
            <HomeIcon/>
            Home
          </Item>

          <Item>
            <ExploreIcon/>
            Explore
          </Item>

          <Item>
            <SubscriptionsIcon/>
            Subscriptions
          </Item>

          <Hr/>
          <Login>
          Sign in to like videos, comment, and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
          <Button>
            <AccountCircleOutlinedIcon/>
            SIGN IN</Button>
            </Link>
          </Login>
          <Hr/>

          <Title>Best of HellTube</Title>

          <Item>
            <LibraryAddIcon/>
            Library
          </Item>

          <Item>
            <HistoryIcon/>
           History
          </Item>

          <Item>
            <LibraryMusicOutlinedIcon/>
            Music
          </Item>

          <Item>
            <SportsBasketballOutlinedIcon/>
            Sports
          </Item>

          <Item>
            <SportsEsportsOutlinedIcon/>
            Gaming
          </Item>

          <Item>
            <MovieFilterOutlinedIcon/>
            Movie
          </Item>

          <Item>
            <NewspaperOutlinedIcon/>
            News
          </Item>

          <Item>
            <LiveTvOutlinedIcon/>
           Live
          </Item>
          <Hr/>

          <Item>
            <SettingsOutlinedIcon/>
            Settings
          </Item>
          <Item>
            <OutlinedFlagOutlinedIcon/>
            Flag
          </Item>
          <Item>
            <HelpOutlineOutlinedIcon/>
            Help
          </Item>
          <Item onClick={()=>setDarkMode(!darkMode)}>
            <SettingsBrightnessIcon/>
            {darkMode ? "Light" : "Dark"} Mode
          </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu
