import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getUserById, updateUser } from './api'; // Asumiendo que tienes una API para obtener y actualizar usuarios

interface User {
  id: number;
  name: string;
  email: string;
  role: 'user' | 'admin';
  // Otras propiedades del usuario
}

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = new URLSearchParams(location.search).get('id');
  const [user, setUser] = useState<User | null>(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await getUserById(userId);
      setUser(fetchedUser);
      const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
      setIsEditable(
        currentUser.id === fetchedUser.id || currentUser.role === 'admin'
      );
    };

    if (userId) {
      fetchUser();
    }
  }, [userId]);

  const handleEdit = () => {
    navigate(`/profile/update?id=${userId}`);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        {/* Mostrar otras propiedades del usuario */}
      </div>
      {isEditable && <button onClick={handleEdit}>Edit</button>}
    </div>
  );
};

export default ProfilePage;