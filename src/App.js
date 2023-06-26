import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/dashboard" caseSensitive={false} element={<Dashboard />} />
        <Route path="/contact" caseSensitive={false} element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
