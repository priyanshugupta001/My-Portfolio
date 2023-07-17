import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
// import project from "../assets/projects/project.jpeg";
import filesharing from "../assets/projects/file-sharing.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={filesharing}
              isBlog={false}
              title="File-Sharing-Website"
              description="Developed a file sharing website where a user can easily upload and share his file through link.I have used Reactjs for frontend and The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://github.com/priyanshugupta001/file_sharing"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects