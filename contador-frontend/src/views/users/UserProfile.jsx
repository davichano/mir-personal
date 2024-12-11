// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import UserService from '../../services/UserService';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const urlBacked = 'http://localhost:3000';

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await UserService.getProfile();
        setUser(response);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="row justify-content-center my-5">
      <div className="col-md-3 text-center mx-4 px-3 py-5 bg-body-tertiary">
        <img className={"card-img-top rounded-circle w-50"}
             src={user.company_logo ? urlBacked +  user.company_logo : 'https://cdn.pixabay.com/photo/2017/03/16/21/18/logo-2150297_640.png'}
             alt={name}/>
        <div>
          <h1 className={'lato-bold-italic '}>{user.name}</h1>
          <p className={'lato-regular'}><span>Email:</span> {user.email}</p>
          <hr/>
        </div>
        <div className={'mb-3'}>
          <h3><span className={'lato-bold'}>Emprendimiento:</span> {user.company_name}</h3>
          <p className={'lato-light'}><span className={'lato-bold'}>Descripción:</span> {user.company_description}</p>
        </div>
        <a href={`/users/edit/${user.id}`} className={'btn btn-primary w-100 m-2'}
        >Editar
        </a>
      </div>
      <div className="col-md-8 text-start px-3 py-5 bg-body-tertiary">
        <h1 className={'lato-bold-italic'}>Movimientos</h1>
        <hr/>
        <div className={'table-responsive'}>
          <table className={'table table-sm table-striped'}>
            <thead>
            <tr>
              <th>RUC</th>
              <th>Empresa</th>
              <th>Monto</th>
              <th>Tipo</th>
              <th>Fecha</th>
              <th>Evidencia</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>12345678901</td>
              <td>Empresa 1</td>
              <td>1000</td>
              <td>Ingreso</td>
              <td>2021-01-01</td>
              <td>Archivo.pdf</td>
            </tr>
            <tr>
              <td>12345678901</td>
              <td>Empresa 1</td>
              <td>1000</td>
              <td>Ingreso</td>
              <td>2021-01-01</td>
              <td>Archivo.pdf</td>
            </tr>
            <tr>
              <td>12345678902</td>
              <td>Empresa 2</td>
              <td>2000</td>
              <td>Egreso</td>
              <td>2021-02-01</td>
              <td>Archivo.pdf</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
    ;
};

export default UserProfile;
