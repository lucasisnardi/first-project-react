import styled from "styled-components";


import Background from '../../assets/background.png';


export const Container = styled.div`
background: url("${Background}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;
gap: 40px;

height: 100%
min-height 100vh

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
       backdrop-filter: blur(45px);

       padding: 50px 36px;

       display: flex;
       flex-direction: column;

       height: 100%;
       min-height: calc(100vh - 170px);
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


export const Button = styled.button`
width: 342px;
height: 74px;
margin-top: 120px;

border-radius: 14px;
background: transparent;
border: 1px solid #FFFFFF;

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

img{
    transform: rotatey(180deg);
}
`;

export const User = styled.li`
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 20px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

width: 342px;
height: 58px;

border: none;
outline: none;

p{
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;

    color: #ffffff
}

button{
    background: none;
    border: none;
    cursor: pointer;
}

`