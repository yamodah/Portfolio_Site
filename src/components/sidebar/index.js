import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarElements'
const Sidebar = () => {
    return (
       <SidebarContainer>
           <Icon>
               <CloseIcon />
           </Icon>
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about">
                       About
                   </SidebarLink>
                   <SidebarLink to="projects">
                       Projects
                   </SidebarLink>
                   <SidebarLink to="contact">
                       Contact Me
                   </SidebarLink>
               </SidebarMenu>
           </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
