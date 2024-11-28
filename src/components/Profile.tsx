import React from 'react';

interface ProfileProps {
  id: number;
  name: string;
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ id, name, email }) => {
  return (
    <div>
      <h2>{name}'s Profile</h2>
      <p>ID: {id}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
