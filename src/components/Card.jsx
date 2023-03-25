import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`

const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background-color:#999;
    flex: 1;
`
const Details = styled.div`
  display:flex;
  flex: 1;
  margin-top:${(props) => props.type !== "sm" && "16px"};
  gap:12px;
`;

const ChannelImage = styled.img`
  width:36px;
   height: 36px;
  border-radius:50%;
  background-color:#999;
  display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``
const Title = styled.h1`
  font-size:16px;
  font-weight:500;
  color : ${({theme}) => theme.text}
`;

const ChannelName = styled.h2`
  font-size:14px;
  color : ${({theme}) => theme.textSoft};
  margin:9px 0px;
  `;

const Info = styled.div`
  font-size:14px;
  color : ${({theme}) => theme.textSoft};
`


const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration : "none"}} >
    <Container type={type}>
       <Image  type={type} src="https://t3.ftcdn.net/jpg/05/32/49/06/360_F_532490606_lWUgTqWQ1z4BoBenNaWVympo1OiKWGI9.jpg"/>
    <Details>
    <ChannelImage type={type} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0szgOQjoMtERPPGc94M59ryDj0IJgtUhlmALZEBY&s" />
       <Texts>
          <Title>Testing Video</Title>
          <ChannelName>Vivek Sharma</ChannelName>
          <Info>666,002views . 1 days ago</Info>
        </Texts>
      
    </Details>
    
    </Container>
    </Link>
  )
}

export default Card;
