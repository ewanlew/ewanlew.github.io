import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import NotFound from './pages/NotFound/NotFound';
import Blog from './pages/Blog/Blog';
import About from './pages/About/About';
import CustomCursor from './CustomCursor';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
    <CustomCursor />
      <div>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;