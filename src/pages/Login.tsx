import React from 'react';
import AuthForm, { AuthFormData } from '../components/AuthForm';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const LoginPage: React.FC = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleLogin = async (data: AuthFormData) => {
    try {
      const response = await api.post('/login', data);
      setUser(response.data);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <AuthForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
