import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LogUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí puedes enviar la solicitud de inicio de sesión al servidor
    // utilizando la información ingresada por el usuario (email, password)

    // Limpia los campos del formulario después de enviar la solicitud
    setEmail('');
    setPassword('');

    // Navega de regreso al componente User
    navigate('/usuario');
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default LogUser;
