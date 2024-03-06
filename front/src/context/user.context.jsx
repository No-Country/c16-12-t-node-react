import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { getFromSessionStorage } from '@/services/utils/handle-token.utils';
import { USER_ID } from '@/config/config';
import { USER } from '@/services/apiServices/user.service';
import { AUTH } from '@/services/apiServices/auth.service';

const UserContext = createContext();
const userID = getFromSessionStorage(USER_ID);

function UserProvider({ children }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    USER.getUser(userID)
      .then((user) => setUser(user))
      .catch(console.error);
  }, []);

  const register = (newUserData) => {
    AUTH.register(newUserData)
      .then((newUser) => setUser(newUser))
      .catch(console.error);
  };

  const login = (credentials) => {
    AUTH.login(credentials)
      .then((user) => setUser(user))
      .catch(console.error);
  };

  const logout = () => {
    setUser(null);
    AUTH.logout();
  };

  const updateUser = (updateUserData) => {
    USER.updateUser(userID, updateUserData)
      .then((user) => setUser(user))
      .catch(console.error);
  };

  const deleteUser = () => {
    USER.deleteUser(userID)
      .then(() => setUser({}))
      .catch(console.error);
  };

  return (
    <UserContext.Provider
      value={{ user, login, register, logout, updateUser, deleteUser }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { useUser, UserProvider };

UserProvider.propTypes = {
  children: PropTypes.node,
};
