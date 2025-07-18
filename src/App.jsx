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
    <div className="home">
      <Background/>
      <h1>ewamnb</h1>
    </div>
  );
}

export default App;
