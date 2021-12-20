import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";

export const InfoContainer =styled.div`
color:#fff;
background: ${({lightBg})=>(lightBg ? "rgba(25, 105, 234, 0.61)": "#010606")};
height:850px;
@media screen and (max-width: 1200px){
    height:1000px;
}
@media screen and (max-width: 768px){
    height:1200px
}
`
export const InfoWrapper = styled.div`
display:flex;
z-index:1;
// height:775px;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 24px;
justify-content:center;
@media and screen (max-width: 768px){
    flex-direction:column;
    // height:1200px;
 }
`
export const InfoRow =  styled.div`
font-family: 'Raleway', sans-serif;
display:flex;
align-items:flex-start;
padding-top:8rem;
flex-direction:column;
`

export const Column = styled.div`
margin-bottom:15px;
padding:0 15px;
`
export const TextWrapper = styled.div`
max-width:720px;
padding-top:0;
padding-bottom:60px;
`
export const TopLine = styled.p`
color:#1969EA;
fonst-size:24px;
line-height:28px;
font-weight:700px;
letter-spacing:2px;
text-transform:uppercase;
margin-bottom:16px;
`

export const Heading = styled.h1`
text-shadow: 2px 2px 4px #000000,2px 2px 4px #000000;
margin-bottom:24px;
font-size:48px;
line-height:1.1;
font-weight: 600;
color:${({lightText})=>(lightText ? "#fff":"#010606")};

@media screen and (max-width:480px){
    font-size:32px;
}
`
export const Subtitle = styled.p`
text-align:start;
width:100%;
margin-bottom:25px;
font-size:18px;
line-height:24px;
color:${({darkText})=>(darkText?"#000":"#fff")};

`

export const ImgWrap = styled.div`
max-width:555px;
margin-top:4rem;
`
export const Img = styled.img`
width:100%;
max-height:100%;
margin:100px 0 10px 0;
padding-right:0;
border-radius:50px;
`

export const WhiteLine = styled.hr`
    width: 35%;
    margin-top:-10px;
    margin-left: auto;
    margin-right: auto;
    background:white;
    margin-bottom:1rem;
    border: 4px solid #fff;
    border-radius:15px;
`
export const ChevronContainer = styled(LinkScroll)`
margin-top:25px;
display:flex;
justify-content:center;
align-items:center;
color: #fff;
text-shadow: 2px 2px 4px #000000;
cursor: pointer;
font-size: 2rem;
font-weight: bold;
text-decoration: none;
z-index:7;
&:hover{
    transition: 0.2s ease-in-out;
    color:#1969EA;
    text-shadow: 2px 2px 4px #fff;
    font-size:2.5rem;
}
`

export const PageDown = styled(LinkScroll)`

`