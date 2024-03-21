import { Routes, Route } from 'react-router-dom';

import {
  LandingPage,
  RegistePage,
  ResultPage,
  LoginPage,
  MessagesPage,
  TripDetailsPage,
  MyTrips,
  CreateNewTripPage,
} from '../pages';
import { useUser } from '../context/user.context';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage.';

export const Router = () => {
  const { user } = useUser();

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/trips/:tripId" element={<TripDetailsPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/register" element={<RegistePage />} />
      <Route path="/login" element={<LoginPage />} />
      {user && (
        <>
          <Route path="*" element={<LandingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/profile" element={<h1>Mi perfil</h1>} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/trips/:userId/my-trips" element={<MyTrips />} />
          <Route
            path="/trips/:userId/create-new-trip"
            element={<CreateNewTripPage />}
          />
          <Route
            path="/trips/:userId/edit-trip/:tripId"
            element={<h1>Editar viaje</h1>}
          />
        </>
      )}
    </Routes>
  );
};
