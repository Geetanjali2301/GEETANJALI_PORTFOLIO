import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiHackerrank, SiLeetcode} from 'react-icons/si'

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{fontSize: '2.8em', textAlign:'left'}}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I am <b className="purple">Geetanjali Mahavir Pohare</b>, a dedicated coder passionate about solving complex problems. Proficient in programming languages like<b className="purple"> Java, C and Python</b>. I am also a MERN stack developer with understanding of various <b className="purple"> Web Technologies</b>.
              Driven by curiosity and a love for continuous learning, I constantly seek to expand my skills and tackle new challenges. So let's dive into the world of <b className="purple"> Tech </b> and create something amazing together !👩🏻‍💻
            </p>
            <br/>
            <br/>
            <br/>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
          <br/>
            <h1>Check out my <span className="purple">Profile's</span></h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Geetanjali2301"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/geetanjali-pohare-156bb6237/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/profile/geetanjalipohare"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiHackerrank/>
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/geetanjalipohare/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiLeetcode/>
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
