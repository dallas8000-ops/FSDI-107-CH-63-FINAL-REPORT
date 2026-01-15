import Navbar from './components/Navbar';
import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Catalog from './components/Catalog';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import Adm from './pages/Adm';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
        <main className="bg-light py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/admin" element={<Adm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
