import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../services/api';

const EditProfilePage: React.FC = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await api.get(`/users/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
    };
    fetchUser();
  }, [id]);

  const handleSave = async () => {
    await api.put(`/users/${id}`, { name, email });
    navigate(`/profile/${id}`);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditProfilePage;
