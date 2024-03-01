import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import { ROLE } from '@/services/apiServices/role.service';

const RoleContext = createContext();

function RoleProvider({ children }) {
  const roleData = {
    roles: [],
    role: {},
  };

  const [roles, setRoles] = useState(roleData);

  useEffect(() => {
    ROLE.getRoles()
      .then((roles) => {
        setRoles({
          ...roles,
          ['roles']: roles.data,
        });
      })
      .catch(console.error);
  }, []);

  const createRole = (newRole) => {
    ROLE.createRole(newRole)
      .then((role) =>
        setRoles({
          ...roles,
          ['role']: role,
        })
      )
      .catch(console.error);
  };

  const updateRole = (roleId, updateRoleData) => {
    ROLE.updateRole(roleId, updateRoleData)
      .then((role) =>
        setRoles({
          ...roles,
          ['role']: role,
        })
      )
      .catch(console.error);
  };

  const deleteRole = (roleId) => {
    ROLE.deleteRole(roleId)
      .then(() =>
        setRoles({
          ...roles,
          ['role']: {},
        })
      )
      .catch(console.error);
  };

  return (
    <RoleContext.Provider value={{ roles, createRole, updateRole, deleteRole }}>
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
