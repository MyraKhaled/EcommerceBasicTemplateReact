import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
  return (
    <div>
      <div className="myProduct">Our Products</div>

      <div className="products">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/slide1.jpg" />
          <Card.Body>
            <Card.Title>Classic Bag</Card.Title>
            <Card.Text>
              Elegant and stylish bag for every occasion.
            </Card.Text>
            <Button className="button">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/slide3.jpg" />
          <Card.Body>
            <Card.Title>Mini Bag</Card.Title>
            <Card.Text>
              A beautiful and practical bag for your everyday look.
            </Card.Text>
            <Button className="button">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/slide4.jpg" />
          <Card.Body>
            <Card.Title>Shoulder Bag</Card.Title>
            <Card.Text>
              Simple, elegant and perfect for any occasion.
            </Card.Text>
            <Button className="button">Shop Now</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="/slide7.jpg" />
          <Card.Body>
            <Card.Title>Luxury Bag</Card.Title>
            <Card.Text>
              A stylish bag designed to complete your outfit.
            </Card.Text>
            <Button className="button">Shop Now</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default Products;