"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const iconRow = {
    justifyContent:'space-between',
    alignItems:'center',
    width:'90%'
  }

  return (
    <main>
      <div className="content fadeIn">
        <span className="title">
          HELLO! I'M VITOR BERNSTORFF CLEMES!
        </span>
        <p>
            I'm so glad to have you here!<br/>
            Welcome to my interactive portfolio
        </p>

        <p>I am a </p>
        <div className='button'>
          WEB FULLSTACK DEVELOPER
        </div>

        <img src="./separator.svg" alt="1" />

        <p>Remember to connect with me in</p>
        <div className="flexRow" style={iconRow}>
          <a href="https://www.linkedin.com/in/vitor-bernstorff-clemes-79b2ab219/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#0e76a8"/>
          </a>
          <a href="https://github.com/vitorbclemes" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" color="#FFF"/>
          </a>
          <a href="https://www.instagram.com/vitor.bclemes/" target="_blank" rel="noopener noreferrer">
            <img src='./instagram.svg' alt='instagram' />
          </a>
          <a href="mailto:vitorclemes.dev@gmail.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="2x" color="#FFF"/>
          </a>
        </div>
      </div>
    </main>
  )
}
