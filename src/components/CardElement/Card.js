import React from 'react'
import { Card, CardGroup, Dropdown } from 'react-bootstrap'

export function Cards() {
    return (
 <CardGroup id="projects" style={{flexDirection:"column",fontFamily:"'Raleway', sans-serif"}}>
  <Card style={{marginBottom:"2.5rem", border:"none"}} >
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Notepad CLI App</Card.Title>
      <Card.Text>
       An app to write notes from the terminal to a private SQL database utliizing a personal Node.js api. 
       Why you may ask ? Because why not! Writing in the terminal feels cool, it feels offical. 
      </Card.Text>
    </Card.Body>
    <Card.Footer style={{display:"flex",justifyContent:"center",backgroundColor:"white"}}>
    <Dropdown>
  <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Project Links
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Github Repository</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Card.Footer>
  </Card>
</CardGroup>
    )
}

export default Card
