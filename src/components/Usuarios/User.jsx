import React from 'react';
import { NavLink, Route, Routes, useLocation, Outlet } from 'react-router-dom';
import CreateUser from './CreateUser';
import LogUser from './LogUser';

const User = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Usuario</h2>
      <NavLink to="/usuario/create-user" activeClassName="active">
        Crear cuenta
      </NavLink>
      <NavLink to="/usuario/login" activeClassName="active">
        Iniciar sesión
      </NavLink>
      <Routes location={location}>
        <Route path="/" element={<UserOptions />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/login" element={<LogUser />} />
      </Routes>
    </div>
  );
};

const UserOptions = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default User;
