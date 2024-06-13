import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {AiFillGithub} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {SiHackerrank, SiLeetcode} from 'react-icons/si'

function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Geetanjali Pohare</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Geetanjali2301"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/geetanjali-pohare-156bb6237/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://leetcode.com/u/geetanjalipohare/"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/profile/geetanjalipohare"
                style={{color: 'white'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiHackerrank />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
