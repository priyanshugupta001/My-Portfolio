import React from "react";
import { Container, Row } from "react-bootstrap";


const Footer = () => {


  const footerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
    return (
      <Container fluid className="footer">
        <Row>
          <div className="footer footer-copywright" style={footerStyle}>
            <span>Dedicated to creating impactful solutions!</span>
          </div>  
        </Row>
      </Container>
    );  
}

export default Footer