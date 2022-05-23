import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { EverythingNews } from './components/projects/EverythingNews';
import { EverythingNewsApi } from './components/projects/EverythingNewsApi';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/everything-news" element={<EverythingNews />} />
        <Route path="/everything-news-rest-api" element={<EverythingNewsApi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
