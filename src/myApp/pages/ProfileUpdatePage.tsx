// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { getUserById, updateUser } from './api'; // Asumiendo que tienes una API para obtener y actualizar usuarios

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   password: string;
//   role: 'user' | 'admin';
//   // Otras propiedades del usuario
// }

// const ProfileUpdatePage: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const userId = new URLSearchParams(location.search).get('id');
//   const [user, setUser] = useState<User | null>(null);
//   const [formData, setFormData] = useState<User>({ id: 0, name: '', email: '', password: '', role: 'user' });

//   useEffect(() => {
//     const fetchUser = async () => {
//       const fetchedUser = await getUserById(userId);
//       setUser(fetchedUser);
//       setFormData(fetchedUser);
//     };

//     if (userId) {
//       fetchUser();
//     }
//   }, [userId]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (user) {
//       const updatedUser = await updateUser(userId, formData);
//       if (updatedUser) {
//         const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
//         if (currentUser.id === user.id) {
//           navigate('/home');
//         } else {
//           navigate('/all-users');
//         }
//       }
//     }
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Update Profile</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input type="text" name="name" value={formData.name} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input type="password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <div>
//           <label>Confirm Password:</label>
//           <input type="password" name="confirmPassword" onChange={handleChange} />
//         </div>
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };

// export default ProfileUpdatePage;