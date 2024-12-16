import React from 'react';
import './EventList.css';
import { useNavigate } from 'react-router-dom';

function EventList() {
  const navigate = useNavigate();

  // Datos de ejemplo para los eventos
  const events = [
    { name: 'Evento 1', location: 'Ubicación del evento', organizer: 'Organizador', datetime: 'Fecha y hora' },
    { name: 'Evento 2', location: 'Ubicación del evento', organizer: 'Organizador', datetime: 'Fecha y hora' },
    { name: 'Evento 3', location: 'Ubicación del evento', organizer: 'Organizador', datetime: 'Fecha y hora' },
    { name: 'Evento 4', location: 'Ubicación del evento', organizer: 'Organizador', datetime: 'Fecha y hora' },
  ];

  return (
    <div className="eventlist-container">
      {/* Barra de navegación */}
      <header className="eventlist-header">
        <nav>
          <button
            className="nav-button"
            onClick={() => navigate('/events')}
          >
            Todos los eventos
          </button>
          <button
            className="nav-button active"
            onClick={() => navigate('/my-events')}
          >
            Mis eventos
          </button>
        </nav>
        <div className="profile-icon" onClick={() => navigate('/')}>👤</div>
      </header>

      {/* Título dinámico */}
      <div className="eventlist-title">
        <h2>Mis eventos registrados</h2>
      </div>

      {/* Lista de eventos */}
      <div className="eventlist">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-details">
              <strong>{event.name}</strong>
              <p>{event.location}</p>
              <p>{event.organizer}</p>
            </div>
            <div className="event-meta">
              <span>{event.datetime}</span>
              <div className="notification-icon">🔔</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventList;
