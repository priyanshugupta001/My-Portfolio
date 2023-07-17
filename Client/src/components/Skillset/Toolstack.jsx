import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiGit, SiGithub } from "react-icons/si";

const Toolstack = () => {

  const containerStyle = {
    display: 'flex', 
    justifyContent : 'center',
    alignItems : 'center',
  };
  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  const itemStyle = {
    textAlign: 'center',
  };


  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <div className="container" style={containerStyle}>
      
        <div className="column" style={columnStyle}>
          <div className="item" style={itemStyle}>
              <Col className="tech-icons">
                 <SiVisualstudiocode />
              </Col>
          </div>
          <div className="item">VS Code</div> 
        </div>
        <div className="column" style={columnStyle}>
          <div className="item" style={itemStyle}>
              <Col className="tech-icons">
                 <SiGit />
              </Col>
          </div>
          <div className="item">Git</div> 
        </div>

        <div className="column" style={columnStyle}>
          <div className="item" style={itemStyle}>
              <Col className="tech-icons">
                 <SiGithub />
              </Col>
          </div>
          <div className="item">Github</div> 
        </div>
      </div>  
      
    </Row>
  );
}

export default Toolstack;
