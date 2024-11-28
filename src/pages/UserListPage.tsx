import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import { api } from '../services/api';

const UserListPage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get('/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return <UserList users={users} />;
};

export default UserListPage;
