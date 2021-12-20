import React from 'react'
import { Card, CardGroup, Dropdown } from 'react-bootstrap'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { ImTerminal } from "react-icons/im"
import { SiPostgresql } from "react-icons/si"
// import { Button } from '../ButtonElement/Button'
// import { GithubIcon } from '../heroHome/HeroHomeElements'
import{ Heading } from "../InfoElement/InfoElements"
import { TopLine } from '../InfoElement/InfoElements'
export function Cards() {
    const movieSite = require("../../images/movies_site.jpg")
    const notePadCLI = require("../../images/notepad_demo_image.jpg")
    return (
 <CardGroup id="projects" style={{flexDirection:"column",fontFamily:"'Raleway', sans-serif", maxWidth:"750px",marginRight:"auto", marginLeft:"auto"}}>
     <TopLine style={{alignSelf:"flex-start"}}>Projects</TopLine>
     <Heading lightText="true" style={{alignSelf:"flex-start"}}>Notepad CLI app</Heading>
  <Card style={{marginBottom:"2.5rem", border:"none",background:"#f0ffff",}} >
    <Card.Img variant="top" src={notePadCLI} alt=""/>
    <Card.Body>
      <Card.Text>
       An app to write notes from the terminal to a private SQL database utliizing a personal Node.js api. 
       Why you may ask ? Because why not! Writing in the terminal feels cool, it feels offical. <FaNodeJs/><FaReact/><ImTerminal/><SiPostgresql/>  
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{background:"rgba(25, 105, 234, 0.5)",border:"none",display:"flex",justifyContent:"center", maxWidth:"100%"}}>
    <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic" >
    Project Links
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="https://github.com/yamodah/notepad_cli" target='_blank'
          rel="noopener">CLI App Repo</Dropdown.Item>
        <Dropdown.Item href="https://github.com/yamodah/Notepad_api" target='_blank'
          rel="noopener">Backend API Repo</Dropdown.Item>
        <Dropdown.Item href="#/action-3" target='_blank'
          rel="noopener">Frontend (live site)</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Card.Footer>
  </Card>
  <Heading lightText="true" style={{alignSelf:"flex-start"}}>We Love Movies site</Heading>
  <Card style={{marginBottom:"2.5rem", border:"none",background:"#f0ffff",}} >
    <Card.Img variant="top" src={movieSite} alt=""/>
    <Card.Body>
      <Card.Text>
       A full stack website application with built with a Postgresql database Node.js backend and a react frontend. This project was undertaken with the goal of practicing 
       building and deploying RESTFUL API's . We all love movies but someone has to get the data for us ! <FaNodeJs/><FaReact/><SiPostgresql/> 
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{background:"rgba(25, 105, 234, 0.5)",border:"none",display:"flex",justifyContent:"center", maxWidth:"100%"}}>
    <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic" >
    Project Links
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="https://frozen-wildwood-08033.herokuapp.com/" target='_blank'
          rel="noopener">Live Site</Dropdown.Item>
        <Dropdown.Item href="https://github.com/yamodah/We_Love_Movies_Project" target='_blank'
          rel="noopener">Backend API Repo</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Card.Footer>
  </Card>
</CardGroup>
    )
}

export default Card
