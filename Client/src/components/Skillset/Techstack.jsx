import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1,DiReact,DiNodejs,} from "react-icons/di";
import { SiMaterialui,SiMongodb,SiHtml5, SiC, SiCplusplus, SiExpress } from "react-icons/si";

const Techstack = () => {


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
                  <SiC />
                </Col>
            </div>
            <div className="item">C</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <SiCplusplus />
                </Col>
            </div>
            <div className="item">C++</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <SiHtml5 />
                </Col>
            </div>
            <div className="item">HTML</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <DiJavascript1 />
                </Col>
            </div>
            <div className="item">JavaScript</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <DiReact />
                </Col>
            </div>
            <div className="item">Reactjs</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <DiNodejs />
                </Col>
            </div>
            <div className="item">Nodejs</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <SiExpress />
                </Col>
            </div>
            <div className="item">Expressjs</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <SiMongodb />
                </Col>
            </div>
            <div className="item">MongoDB</div> 
          </div>

          <div className="column" style={columnStyle}>
            <div className="item" style={itemStyle}>
                <Col className="tech-icons">
                  <SiMaterialui/>
                </Col>
            </div>
            <div className="item">Materialui</div> 
          </div>
        </div>  
    
    </Row>

  );
}

export default Techstack;
