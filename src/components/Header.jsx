import * as React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  // const [value, setValue] = React.useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  const handleClick = () => {
    window.open('/submit', '_blank');
  }


  return (
    <div>
      <Container className="d-flex align-items-center">
        <Row>
        <Col
            xs={12}
            md={6}
            className="d-flex align-items-start justify-content-center text-center"
          >
            <div>
              <h1>Hackathon Submissions</h1>
              <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita aut id blanditiis ea error distinctio quo sint illo a illum, fugit non labore, voluptas consequatur voluptatum nulla alias! Numquam, inventore?</h3>
              <Button variant="success" style={{height:"50px"}} onClick={handleClick}>Upload Submission</Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
          <div style={{ height: "200px" }}>
            <Image  src="" fluid />
          </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Header;
