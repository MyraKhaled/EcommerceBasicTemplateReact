import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Footer() {
  return (
    <Card className="footer">
      <Card.Body>
        <Card.Title>ℰℒℒ𝒜 ℬ𝓇𝒶𝓃𝒹</Card.Title>
        <Card.Text>
          Elegant bags for every occasion.
        </Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush">
        <ListGroup.Item className='active2'>Home</ListGroup.Item>
        <ListGroup.Item className='active2'>Shop</ListGroup.Item>
        <ListGroup.Item className='active2'>New Arrivals</ListGroup.Item>
        <ListGroup.Item className='active2'>Collections</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Card.Link href="#">Instagram</Card.Link>
        <Card.Link href="#">Facebook</Card.Link>
        <Card.Link href="#">Contact</Card.Link>
      </Card.Body>

      <Card.Footer className="text-muted">
        © 2026 ℰℒℒ𝒜 ℬ𝓇𝒶𝓃𝒹. All rights reserved.
      </Card.Footer>
    </Card>
  );
}

export default Footer;