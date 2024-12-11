// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import UserService from '../../services/UserService';
import {useNavigate} from 'react-router-dom';
import imgForm from "../../resources/img/login.svg";
import {useAuth} from "../../context/AuthContext.jsx";

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await UserService.login({email, password});
      console.log('response', response);
      login(response);
      navigate("/profile");
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 text-start px-2 py-5">
        <h1 className={'my-5'}>Iniciar Sesión</h1>
        <form onSubmit={handleLogin}>
          <div className={'form-group mb-3'}>
            <label>Email:</label>
            <input
              type="email"
              className={'form-control'}
              placeholder="Correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={'form-group mb-3'}>
            <label>Password:</label>
            <input
              type="password"
              placeholder="Contraseña"
              className={'form-control'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className={'btn btn-primary w-100 mb-2'}
            type="submit">Iniciar Sesión
          </button>
          <p>
            ¿No tienes cuenta? <a href={'/register'}>Regístrate</a>
          </p>
        </form>
      </div>
      <div className="col-md-6">
        <img src={imgForm} alt={"Start Up"}/>
      </div>
    </div>
  );
};

export default UserLogin;
