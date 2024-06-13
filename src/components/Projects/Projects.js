import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import tictactoe from "../../Assets/Projects/tictactoe.png";
import blog from "../../Assets/Projects/blog.png";
import ecom from "../../Assets/Projects/ecom.png";
import movie from "../../Assets/Projects/movie.png";
import todo from "../../Assets/Projects/todo.png";


import ReactGA from "react-ga";

function Projects() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="E-Commerce Site"
              description="It is a Full Stack Ecommerce website inspired by Flipkart, built using MERN Stack - MongoDB, ExpressJs, NodeJs and ReactJs."
              link="https://github.com/Geetanjali2301/E-COMMERCE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Site"
              description="It is a Simple personal blog website which is build with HTML, CSS, Javascript and Firebase as database. "
              link="https://github.com/Geetanjali2301/BLOG_SITE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic-Tac-Toe"
              description="It is a basic Tic-Tac-Toe game which is simple yet engaging, built using HTML, CSS and Javascript."
              link="https://github.com/Geetanjali2301/TIC-TAC-TOE"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie Guide Site"
              description="It is a Simple movies guide app built using HTML, CSS AND JS with integration of API to fetch movie details over Web."
              link="https://github.com/Geetanjali2301/MOVIES_GUIDE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do List"
              description="It is a Simple To Do List app built using HTML, CSS AND JS to track the records of tasks to be performed."
              link="https://github.com/Geetanjali2301/BASIC_PROJECTS/tree/master/To_Do_List"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
