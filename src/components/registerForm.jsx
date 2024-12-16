import React from 'react';
import './RegisterForm.css'; // Importamos el CSS
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
    const navigate = useNavigate();
  return (
    <div className="register-container">
      <form className="register-form">
        {/* Nombres y Apellidos */}
        <div className="form-row">
          <div className="form-group">
            <label>Nombres</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div className="form-group">
            <label>Apellidos</label>
            <input type="text" placeholder="Tus apellidos" />
          </div>
        </div>

        {/* Indicativo y Teléfono */}
        <div className="form-row">
          <div className="form-group">
            <label>Indicativo</label>
            <input type="text" placeholder="+57" />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="text" placeholder="Tu teléfono" />
          </div>
        </div>

        {/* Correo electrónico */}
        <div className="form-group">
          <label>Correo electrónico</label>
          <input type="email" placeholder="ejemplo@correo.com" />
        </div>

        {/* País y Ciudad de residencia */}
        <div className="form-row">
          <div className="form-group">
            <label>País residencia</label>
            <input type="text" placeholder="Tu país" />
          </div>
          <div className="form-group">
            <label>Ciudad de residencia</label>
            <input type="text" placeholder="Tu ciudad" />
          </div>
        </div>

        {/* Términos y condiciones */}
        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Al registrarse, aceptas nuestros términos y condiciones de tratamiento de datos
          </label>
        </div>

        {/* Botón Registrarse */}
        <button type="submit" className="register-button" onClick={() => navigate('/')}>Registrarse</button>
      </form>
    </div>
  );
}

export default RegisterForm;
