import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import { UserProvider } from './context/user.context.jsx';
import { RoleProvider } from './context/roles.context.jsx';
import { CityProvider } from './context/cities.context.jsx';
import { CountryProvider } from './context/countries.context.jsx';
import { TripProvider } from './context/Trips.context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RoleProvider>
          <CityProvider>
            <CountryProvider>
              <TripProvider>
                <App />
              </TripProvider>
            </CountryProvider>
          </CityProvider>
        </RoleProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
