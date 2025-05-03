import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import HomePage from './Pages/HomePage/HomePage';
import ProtectedRoute from './ProtectedRoute';
import DuasPage from './Pages/DuasPage/DuasPage';
import DuaDetailPage from './Pages/DuaDetailPage/DuaDetailPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/duas"
            element={
              <ProtectedRoute>
                <DuasPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dua-detail/:id"
            element={
              <ProtectedRoute>
                <DuaDetailPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
