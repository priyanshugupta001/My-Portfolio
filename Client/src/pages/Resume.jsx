import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

import resumeLink from '../assets/Resume.jpg' ;
import Particle from '../components/Particle'
import pdf from "../assets/ResumeSC.pdf"

import {pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




const Resume = () => {
  
  return (
    <div>
      <Container fluid className="resume-section">
          <Particle />
          <Row style={{ justifyContent: "center", position: "relative" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </Row>

          <div className="resume">
            <img src={resumeLink} alt="" style={{width: "60%"}}/>
          </div>
        
        
      </Container>
    </div>
  )
}

export default Resume