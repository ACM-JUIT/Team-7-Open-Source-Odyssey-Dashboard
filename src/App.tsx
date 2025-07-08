import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/landing';
import Index from '@/pages/index';
import Login from '@/pages/login';
import Signup from './pages/signup';  

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/app" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;



