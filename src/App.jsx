import { Routes, Route, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useEffect } from 'react';
import Projects from './Projects';
import NotFound from './NotFound';
import Background from './Background';
import './App.css';

function App() {
  return (
    <>
      <div>
        {location.pathname !== '/' && (
          <header className="header">
            <div>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
              </nav>
            </div>
          </header>
        )}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

function Home() {
  useEffect(() => {
    document.title = 'Ewan Lewis'
  }, []);

  return (
    <div className="home-container">
      <Background />
      <div className="intro-card">
        <div className="intro-section">
          <img src="/img/profile.jpg" alt="Ewan Lewis" />
          <div className="intro-text">
            <p><u>ewan lewis</u></p>
            <p style={{ fontSize: '1.15rem', color: 'var(--main-accent)' }}>software engineer, pokémon enjoyer, hardstuck ascendant</p>
          </div>
        </div>

        <div className="nav-buttons">
          <Link to="/about">about me</Link>
          <Link to="/projects">projects</Link>
          <Link to="/contact">contact</Link>
        </div>

        <div className="socials-icons">
          <a href="https://github.com/ewanlew" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ewan-lewis-492aa9283/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/waitihaventmadeatwitteryetpls" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
