import React,{useState} from 'react'
import { Button } from '../ButtonElement/Button'
import { Cards } from '../CardElement/Card'
import { GithubIcon } from '../heroHome/heroHomeElements'
import { ProjectsContainer } from './ProjectsElements'


const Projects = () => {
    const [hover, setHover] = useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
    return (
        <>
        <ProjectsContainer id="projects">
            
        <Cards />
        <Button onMouseEnter={handleHover} onMouseLeave={handleHover} style={{maxWidth:"400px"}} big="true" fontBig="true" primary="true"
          href="https://github.com/yamodah"
          target='_blank'
          rel="noopener"
          aria-label='Github'>{hover ? <GithubIcon/> :"More Projects !"}</Button>
        </ProjectsContainer>
        </>
    )
}

export default Projects
