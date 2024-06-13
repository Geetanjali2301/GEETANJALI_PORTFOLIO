import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'PROGRAMMER < / >',
          'MERN STACK DEVELOPER. . .',
          'TECH ENTHUSIAST. . .',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
