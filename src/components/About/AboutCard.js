import React from 'react'
import Card from 'react-bootstrap/Card'
import {ImPointRight} from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: 'justify'}}>
            Hi Everyone, I am <span className="purple">Geetanjali Mahavir Pohare </span>
            from <span className="purple"> Maharashtra, India. </span>
            Coding is not just a skill for me; it,s a passion. I thrive on problem-solving and enjoy tackling complex challenges through innovative solutions. My proficiency spans several programming languages including Java, C and Python, enabling me to approach problems from multiple effective ways.
            <br />
            <br/>
            In addition to core programming skills, I am a proficient developer. My expertise encompasses both front-end and back-end development, allowing me to create dynamic web applications. I am always eager to leverage my skills and knowledge to contribute meaningfully to tech industry, solve real-worl problems and innovate for a better future.
            <br />
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Public speaking
            </li>
          </ul>

<br/>
          <p style={{marginBlockEnd: 0, color: 'rgb(155 126 172)'}}>
            "Experience is the name everyone gives to their mistakes."{' '}
          </p>
          <footer className="blockquote-footer">Oscar Wilde</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
