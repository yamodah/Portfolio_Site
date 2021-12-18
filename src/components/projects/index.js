import React from 'react'
import { Cards } from '../CardElement/Card'
import { ProjectsContainer } from './ProjectsElements'
import{ Heading } from "../InfoElement/InfoElements"
import { TopLine } from '../InfoElement/InfoElements'
const Projects = () => {
    return (
        <>
        <ProjectsContainer>
            <TopLine style={{alignSelf:"flex-start"}}>Projects</TopLine>
            <Heading lightText="true" style={{alignSelf:"flex-start"}}>Notepad CLI app</Heading>
        <Cards />
        </ProjectsContainer>
        </>
    )
}

export default Projects
