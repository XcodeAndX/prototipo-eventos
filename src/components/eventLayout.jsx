import React from 'react';
import './EventLayout.css'; // Importamos el estilo
import { useNavigate } from 'react-router-dom';

function EventLayout() {
    const navigate = useNavigate();
  return (
    <div className="event-container">
      {/* Encabezado */}
      <header className="event-header">
        <h1>Página principal eventos</h1>
        <nav>
          <button onClick={() => navigate('/events')}>
            Todos los eventos</button>
          <button onClick={() => navigate('/my-events')}>Mis eventos</button>
        </nav>
        <div className="profile-icon" onClick={() => navigate('/')}>👤</div>
      </header>

      {/* Contenido principal */}
      <div className="event-content">
        {/* Mapa */}
        <section className="event-map">
          <h2>Mapa</h2>
          <div className="map-placeholder">
            <img
              src="https://via.placeholder.com/500x300?text=Mapa"
              alt="Mapa"
            />
          </div>
        </section>

        {/* Lista de eventos */}
        <section className="event-list">
          <h2>Eventos</h2>
          <div className="event-card">
            <strong>Evento 1</strong> <span>Fecha y hora</span>
            <p>Descripción del evento</p>
          </div>
          <div className="event-card">
            <strong>Evento 2</strong> <span>Fecha y hora</span>
            <p>Descripción del evento</p>
          </div>
          <div className="event-card">
            <strong>Evento 3</strong> <span>Fecha y hora</span>
            <p>Descripción del evento</p>
          </div>
          <div className="event-card">
            <strong>Evento 4</strong> <span>Fecha y hora</span>
            <p>Descripción del evento</p>
          </div>
          <div className="event-card">
            <strong>Evento 5</strong> <span>Fecha y hora</span>
            <p>Descripción del evento</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EventLayout;
