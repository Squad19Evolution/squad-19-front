import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalContext';
import DashBoard from './pages/Dashboard';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Path from './pages/Path';
import SignUp from './pages/SignUp';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/path/:id' element={<Path />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
