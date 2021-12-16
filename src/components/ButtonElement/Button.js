import styled from "styled-components";

export const Button = styled.a`
border-radius:50px;
background:${({primary})=>(primary?"#1969EA":"#854BC6")};
white-space:nowrap;
padding:${({big})=>(big ? "14px 48px": "12px 30px")};
color:${({dark})=>(dark ? "#010606": "#fff")};
font-size:${({fontBig})=>(fontBig ? "24px": "16px")};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2s ease-in-out;
text-decoration:none;
width:85%;
margin:1.5rem;
border: groove white 2px;

&:hover {
    // transition:all 0.2s ease-in-out;
    background:white;
    border:none;
    // color:white;

`