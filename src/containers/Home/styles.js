import styled from "styled-components";
import { Link } from "react-router-dom";

import Background from '../../assets/background1.png';


export const Container = styled.div`
background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

`;

export const Image = styled.img`
margin-top: 30px
`;

export const ContainerItens = styled.div`
background: linear-gradient(157deg,
     rgba(255, 255, 255, 0.60) 0.84%,
      rgba(255, 255, 255, 0.60) 0.85%,
       rgba(255, 255, 255, 0.15) 100%
       );
       border-radius: 61px 61px 0px 0px;
       padding: 50px 36px;
       display: flex;
       flex-direction: column;
       
`;

export const H1 = styled.h1`
color: #FFF;
text-align: center;
font-size: 34px;
font-style: normal;
font-weight: bold;
line-height: 40px;
margin-bottom: 80px;
`;

export const InputLabel = styled.p`
letter-spacing: -0.408px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: #EEEEEE;
margin-left:25px;


`;

export const Input = styled.input`
border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
width: 342px;
height: 58px;
border: none;
outline: none;
padding-left: 25px;
margin-bottom:34px;

color: #ffffff;
font-size: 20px;
font-style: normal;
font-weight: normal;
line-height: 28PX;

`;

export const Button = styled(Link)`
width: 342px;
height: 74px;
margin-top:130px;
border-radius: 14px;
background:rgba(0, 0, 0, 0.80);
border: none;

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;

color: #FFFFFF;
cursor: pointer;

display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover{
opacity: 0.8;
}

&:active{
    opacity: 0.5;
}
`;


