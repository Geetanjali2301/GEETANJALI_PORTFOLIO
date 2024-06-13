import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Geetanjali_Pohare.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ReactGA from "react-ga";

function Resume() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">

          <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                `1st Runner Up Position in HackHaven 1.0 - National Level Hackathon organised by Shree LR Tiwari College of Engineering and Computer Education Society Of India(CSI) at Mira Road, Mumbai, Maharashtra.`,
                `Among top 50 Candidates in Speech Master's 2.0 (Public Speaking Competition) out of 1600+ participants from different colleges.`,
              ]}
            />
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="DSA Trainer - Coding Club @ Parul University "
              date="June 2023 - Oct 2023"
              content={[
                "In my role I was responsible for teaching and preparing content for 12-week course based on Data Structures and Algorithms.",
                "Implemented new methodologies to solve problems and making students aware of it.",
                
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science and Engineering - Parul University, Gujarat "
              date="2021 - 2025"
              content={[
                "CGPA - 8.65",
                "Skills - Communication, TeamWork, Time Management, Problem Solving, Presentation Skills",

              ]}
            />
            <Resumecontent
              title="HSC - Shri Chaitanya Jr. Kalasala, Hyderabad "
              date="2019 - 2021"
              content={[
                `Percentage - 96.6% `,
                "Skills - Communication, Adaptiblity, Flexiblity",
              ]}
            />
            <Resumecontent
              title="SSC - Gondia Public School, Maharashtra "
              date="2019"
              content={[
                `Percentage - 95.6% `,
                "Skills - TeamWork, Leadership Skills",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
