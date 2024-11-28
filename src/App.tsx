import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import LoginPage from './pages/Login';
import UserProfilePage from './pages/UserProfilePage';
import EditProfilePage from './pages/EditProfilePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />

       
        <Route path="/" element={<UserListPage />} />

       
        <Route path="/profile/:id" element={<UserProfilePage />} />

       
        <Route path="/profile/:id/edit" element={<EditProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
