import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/landing';
import Index from '@/pages/index';
import Login from '@/pages/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Index />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;



