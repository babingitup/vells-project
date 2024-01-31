import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import logo from "./images/vels_logo.png";


function Header() {
  const styles = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    background: '#060543',
    color: 'white'
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img
              src={logo}
              alt="Image 1"
              className="img-fluid"
            />
          </Col>
        </Row>
        <hr>
        </hr>
        <Row>
          <Col>
            <div style={styles}>
            VISTAS-CDOE-General Instructions for Online Admission
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
