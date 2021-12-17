import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

export function Cards() {
    return (
 <CardGroup id="projects">
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Notepad CLI App</Card.Title>
      <Card.Text>
       An app to write notes from the terminal to a private SQL database utliizing a personal Node.js api. 
       Why you may ask ? Because why not! Writing in the terminal feels cool, it feels offical. 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
    )
}

export default Card
