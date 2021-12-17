import React from 'react'
import { Card, CardGroup, Dropdown } from 'react-bootstrap'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { ImTerminal } from "react-icons/im"
export function Cards() {
    return (
 <CardGroup id="projects" style={{flexDirection:"column",fontFamily:"'Raleway', sans-serif"}}>
  <Card style={{marginBottom:"2.5rem", border:"none"}} >
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Notepad CLI App</Card.Title>
      <div style={{display:"flex"}}><FaNodeJs/><FaReact/><ImTerminal/></div>
      <Card.Text>
       An app to write notes from the terminal to a private SQL database utliizing a personal Node.js api. 
       Why you may ask ? Because why not! Writing in the terminal feels cool, it feels offical. 
      </Card.Text>
    </Card.Body>
    <Card.Body>
    </Card.Body>
    <Card.Footer style={{backgroundColor:"white",border:"none"}}>
    <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
    Links
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="https://github.com/yamodah/notepad_cli" target='_blank'
          rel="noopener">CLI App Repository</Dropdown.Item>
        <Dropdown.Item href="https://github.com/yamodah/Notepad_api" target='_blank'
          rel="noopener">Backend API Repository</Dropdown.Item>
        <Dropdown.Item href="#/action-3" target='_blank'
          rel="noopener">Frontend Client (live site)</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Card.Footer>
  </Card>
</CardGroup>
    )
}

export default Card
