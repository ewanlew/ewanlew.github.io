import { Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect } from 'react';
import Projects from './Projects';
import NotFound from './NotFound';
import CustomCursor from './CustomCursor';
import Background from './Background';
import './App.css';
import Contact from './Contact';

function App() {
  return (
    <>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

function Home() {
  useEffect(() => {
    document.title = 'ewan lewis'
  }, []);

  return (
    <div className="page-container home">
      <Background />
      <CustomCursor />
      <div className="page-card home">
        <div className="right-to-work">
          <div className="work-line">
            eligible to work in
            <img src="https://flagcdn.com/gb.svg" alt="UK flag" className="flag-icon" style={{marginLeft: '0.2rem', marginRight: '0.2rem'}}/> &
            <img src="https://flagcdn.com/us.svg" alt="US flag" className="flag-icon" style={{marginLeft: '0.2rem', marginRight: '0.2rem'}}/>
          </div>
          <div className="work-line">
            currently in 
            <img src="https://flagcdn.com/gb.svg" alt="UK flag" className="flag-icon" style={{marginLeft: '0.2rem', marginRight: '0.2rem'}}/>
          </div>
        </div>

        <div className="intro-section">
          <img src="/img/profile.jpg" alt="Ewan Lewis" />
          <div className="intro-text">
            <h3><u>ewan lewis</u></h3>
            <p style={{ color: 'var(--main-accent)' }}>
              software engineering graduate, pokémon enjoyer, hardstuck ascendant
            </p>
          </div>
        </div>

        <div className="nav-buttons">
          <Link to="/about" tabIndex={1} className="nav-button">about me</Link>
          <Link to="/projects" tabIndex={2} className="nav-button">projects</Link>
          <Link to="/contact" tabIndex={3} className="nav-button">contact</Link>
        </div>

        <div className="socials-icons">
          <a href="https://github.com/ewanlew" target="_blank" rel="noopener noreferrer" tabIndex={4}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ewan-lewis-492aa9283/" target="_blank" rel="noopener noreferrer" tabIndex={5}>
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/ewanleww" target="_blank" rel="noopener noreferrer" tabIndex={6}>
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
