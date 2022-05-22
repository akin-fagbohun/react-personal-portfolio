import { Routes, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { EverythingNews } from './components/EverythingNews';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/everything-news" element={<EverythingNews />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
