import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../services/api';
import Profile from '../components/Profile';

const UserProfilePage: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await api.get(`/users/${id}`);
      setUser(response.data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <Profile id={user.id} name={user.name} email={user.email} />
  );
};

export default UserProfilePage;
