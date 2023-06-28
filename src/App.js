import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" caseSensitive={false} element={<Dashboard />} />
        <Route path="/dashboard" caseSensitive={false} element={<Dashboard />} />
        <Route
          path="/contact"
          caseSensitive={false}
          element={(
            <Contact
              handleAddContact={() => {}}
            />
)}
        />
      </Routes>
    </Router>
  );
}

export default App;
