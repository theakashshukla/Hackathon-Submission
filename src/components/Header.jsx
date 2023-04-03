import * as React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Header = () => {
  // const [value, setValue] = React.useState(0);

  // const handleTabChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div>
      <Container className="d-flex align-items-center">
        <Row>
        <Col
            xs={12}
            md={6}
            className="d-flex align-items-center justify-content-center text-center"
          >
            <div>
              <h1>Title</h1>
              <h3>Subtitle</h3>
              <Button variant="success">Upload Submission</Button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src="https://via.placeholder.com/1200x600" fluid />
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default Header;
