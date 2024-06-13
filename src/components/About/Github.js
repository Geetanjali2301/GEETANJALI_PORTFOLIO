import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import {Row} from 'react-bootstrap'
import Home2 from '../Home/Home2'

function Github() {
  const colourTheme = {
    background: 'transparent',
    text: '#ffffff',
    grade4: '#8400b8',
    grade3: '#b22ff4',
    grade2: '#b265f6',
    grade1: '#c084f5',
    grade0: '#ecd9fc',
  }
  return (
    <Row style={{justifyContent: 'center', paddingBottom: '10px'}}>
      <h1 className="project-heading" style={{paddingBottom: '20px'}}>
        Happy<strong className="purple"> Coding !</strong>
      </h1>
      
    </Row>
  )
}

export default Github
