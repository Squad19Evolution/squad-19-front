import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import DashBoard from './pages/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App;
