import styled from "styled-components"
import {Link as LinkRouter} from "react-router-dom"
import {Link as LinkScroll} from "react-scroll"


export const Nav = styled.nav`
background: rgb(192,192,192, 0.6);
height:60px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
height: 60px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`
export const NavLogo = styled(LinkRouter)`
color: #fff;
text-shadow: 2px 2px 4px #000000;
justtify-self:flex-start;
cursor: pointer;
font-size: 2rem;
display:flex;
align-items: center;
margin-left:24px;
font-weight: bold;
text-decoration: none;
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 768px){
    display:block;
    position: absolute;
    top:-25px;
    right:0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#fff;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
padding:0;
margin-top:1rem;
margin-right:1rem;

@media screen and (max-width: 768px){
    display:none
}
`
export const NavItem = styled.li`
display:flex;
align-items:center;
height: 80px;
`
export const NavLinks = styled(LinkScroll)`
color:#fff;
text-decoration:none;
padding: 0 1rem;
cursor: pointer;
font-size: 1.5rem;
&:hover{
    color:#1969EA;
}
`