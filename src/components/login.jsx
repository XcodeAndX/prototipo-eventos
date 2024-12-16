import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'
import puenteImage from '../assets/puente-183.jpg';

function Login() {
    const navigate = useNavigate();
    return (
        <div className="login-background">
            <div className="login-container">
        {/* Contenedor izquierdo con opacidad */}
        <div className="login-form">
          <h2>Bienvenido de nuevo!</h2>
          <p>Por favor ingresa tus datos aquí:</p>
          <button className="google-btn">Iniciar sesión con Google</button>
          <button className="microsoft-btn">Iniciar sesión con Microsoft</button>
          <div className="separator">o</div>
          <input type="text" placeholder="Usuario o email" />
          <input type="password" placeholder="Contraseña" />
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Recuérdame</label>
          </div>
          <button className="login-btn" onClick={() => navigate('/events')} >Iniciar sesión</button>
          <button className="register-btn" onClick={() => navigate('/register')}>Regístrate</button>
        </div>
  
        {/* Contenedor derecho con imagen */}
      <div
        className="login-image"
        style={{ backgroundImage: `url(${puenteImage})` }}
      ></div>
      </div>

        </div>
      
    );
  }
  
  export default Login;
