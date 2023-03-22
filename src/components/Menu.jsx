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

const Container = styled.div`
    flex:1;
    background-color: #202020;
    height:100vh;
    color:white;
    font-size:14px;
   
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
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border : solid 0.5px #373737
`;

const Menu = () => {
  return (
    <Container>
        <Wrapper>
          <Logo>
            <Img src={Hell} />HellTube
          </Logo>

          <Item>
            <HomeIcon/>
            Home
          </Item>

          <Item>
            <ExploreIcon/>
            explore
          </Item>

          <Item>
            <SubscriptionsIcon/>
            subscriptions
          </Item>

          <Hr/>

          <Item>
            <LibraryAddIcon/>
            Library
          </Item>

          <Item>
            <HistoryIcon/>
           history
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
          <Item>
            <SettingsBrightnessIcon/>
            Light mode
          </Item>
        </Wrapper>
    </Container>
  )
}

export default Menu
