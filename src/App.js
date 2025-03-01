import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrePrimer from './pages/PrePrimer';
import Primer from './pages/Primer';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import About from './pages/About';
import './styles/App.css';

function App() {
  return (
    <Router basename="/SightWords">
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/preprimer" element={<PrePrimer />} />
            <Route path="/primer" element={<Primer />} />
            <Route path="/first" element={<First />} />
            <Route path="/second" element={<Second />} />
            <Route path="/third" element={<Third />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;