import { Routes, Route } from 'react-router-dom';

import {
  LandingPage,
  RegistePage,
  ResultPage,
  LoginPage,
  MessagesPage,
  TripDetailsPage,
} from '../pages';
import { useUser } from '../context/user.context';

export const Router = () => {
  const { user } = useUser();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<h1>Sobre nosotros</h1>} />
      <Route path="/trip/:id" element={<TripDetailsPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/register" element={<RegistePage />} />
      <Route path="/login" element={<LoginPage />} />
      {user && (
        <>
          <Route path="*" element={<LandingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/profile" element={<h1>Mi perfil</h1>} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route
            path="/trips/:user/my-reservations"
            element={<h1>mis reservaciones</h1>}
          />
          <Route path="/trips/:user/my-trips" element={<h1>mis viajes</h1>} />
          <Route
            path="/trips/:user/create-new-trip"
            element={<h1>crear nuevo viaje</h1>}
          />
          <Route
            path="/trips/:user/edit-trip/:tripId"
            element={<h1>Editar viaje</h1>}
          />
        </>
      )}
    </Routes>
  );
};