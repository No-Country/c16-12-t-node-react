import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { ROLE } from '@/services/apiServices/role.service';

const RoleContext = createContext();

function RoleProvider({ children }) {
  const [roles, setRoles] = useState([]);
  const [rol, setRol] = useState({});

  useEffect(() => {
    ROLE.getRoles().then(setRoles).catch(console.error);
  }, []);

  const createRole = (newRole) => {
    ROLE.createRole(newRole).then(setRol).catch(console.error);
  };

  const updateRole = (roleId, updateRoleData) => {
    ROLE.updateRole(roleId, updateRoleData).then(setRol).catch(console.error);
  };

  const deleteRole = (roleId) => {
    ROLE.deleteRole(roleId)
      .then(() =>
        setRoles(
          roles.filter((role) => {
            return role.id !== roleId;
          })
        )
      )
      .catch(console.error);
  };

  return (
    <RoleContext.Provider
      value={{ rol, roles, createRole, updateRole, deleteRole }}
    >
      {children}
    </RoleContext.Provider>
  );
}

function useRoles() {
  return useContext(RoleContext);
}

export { useRoles, RoleProvider };

RoleProvider.propTypes = {
  children: PropTypes.node,
};
