import { Routes, Route, Link } from 'react-router-dom';
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
          <img src="/profile.jpg" alt="Ewan Lewis" />
          <div className="intro-text">
            <p>hey! i'm ewan – a software engineer from wales</p>
          </div>
        </div>

        <div className="nav-buttons">
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
