import { Routes, Route, Link } from 'react-router-dom';
import Projects from './Projects';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <>
      <div>
        {location.pathname !== '/' && (
          <header className="header">
            <div>
              <nav>
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
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default App;
