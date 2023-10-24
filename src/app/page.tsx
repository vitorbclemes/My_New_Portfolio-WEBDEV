"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn,faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const button = {
    background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #FF9F00)',
    color:'#FFF',
    border:'1px solid #5c1385',
    borderRadius:'15px',
    padding:'10px',
    marginBottom:'20px'
  };

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
          <div style={button}>
            WEB FULLSTACK DEVELOPER
          </div>

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
