// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import UserService from '../../services/UserService';
import {useNavigate} from 'react-router-dom';
import imgForm from '../../resources/img/login.svg'


const UserRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await UserService.register(formData);
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar', error);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 text-start px-2 py-5">
        <h1 className={'my-5'}>Registro</h1>
        <form onSubmit={handleRegister}>
          <div className={'form-group mb-3'}>
            <label>Nombre:</label>
            <input
              className={'form-control'}
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div className={'form-group mb-3'}>
            <label>Email:</label>
            <input
              type="email"
              className={'form-control'}
              placeholder="Correo"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className={'form-group mb-3'}>
            <label>Password:</label>
            <input
              type="password"
              className={'form-control'}
              placeholder="Contraseña"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>
          <button
            className={'btn btn-primary w-100 mb-2'}
            type="submit">Registrar
          </button>
          <p>
            ¿Ya tienes una cuenta? <a href={'/login'}>Inicia Sesión</a>
          </p>
        </form>
      </div>
      <div className="col-md-6">
        <img src={imgForm} alt={"Start Up"}/>
      </div>
    </div>
  );
};

export default UserRegister;
