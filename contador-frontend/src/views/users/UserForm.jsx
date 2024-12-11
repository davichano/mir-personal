// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import UserService from '../../services/UserService';
import imgForm from "../../resources/img/form.svg";

const UserForm = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    company_name: '',
    company_description: '',
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        const user = await UserService.getUserById(id);
        setFormData({
          company_name: user.company_name || '',
          company_description: user.company_description || '',
        });
      };
      fetchUser();
    }
  }, [id]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('company_name', formData.company_name);
    formDataToSend.append('company_description', formData.company_description);
    if (file) {
      formDataToSend.append('logo', file);
    }

    if (id) {
      await UserService.updateUserWithFile(id, formDataToSend);
    } else {
      alert("No se enviaron datos porque no se tiene el id");
    }
    navigate('/profile');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6 text-start px-2 py-5">
        <div className={'form-group mb-3'}>
          <label>Emprendimiento:</label>
          <input
            type="text"
            className={'form-control'}
            placeholder="Emprendimiento"
            value={formData.company_name}
            onChange={(e) => setFormData({...formData, company_name: e.target.value})}
          />
        </div>
        <div className={'form-group mb-3'}>
          <label>Descripción:</label>
          <textarea
            className={'form-control'}
            placeholder="Descripción"
            value={formData.company_description}
            onChange={(e) => setFormData({...formData, company_description: e.target.value})}
          />
        </div>
        <div className={'form-group mb-3'}>
          <label>Logo:</label>
          <input
            type="file"
            className={'form-control'}
            onChange={handleFileChange} // Manejador para el archivo
          />
        </div>
        <button
          className={'btn btn-primary w-100 mb-2'}
          type="submit"
          onClick={handleSubmit}
        >
          Guardar
        </button>
      </div>
      <div className="col-md-6">
        <img src={imgForm} alt={"Start Up"}/>
      </div>
    </div>
  );
};

export default UserForm;
