import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import UserService from '../../services/UserService';

const UserForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const user = await UserService.getUserById(id);
        setFormData(user);
      };
      fetchUser();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await UserService.updateUser(id, formData);
    } else {
      await UserService.createUser(formData);
    }
    navigate('/users');
  };

  return (
    <div>
      <h1>{id ? 'Editar Usuario' : 'Crear Usuario'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        <input
          type="email"
          placeholder="Correo"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          onChange={(e) => setFormData({...formData, password: e.target.value})}
        />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UserForm;
