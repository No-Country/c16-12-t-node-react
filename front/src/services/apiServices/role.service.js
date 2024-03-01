import { TOKEN } from '@/config/config';
import { axiosAdapter } from '../api/adapters/axios.adapter';
import { getFromSessionStorage } from '../utils/handle-token.utils';
import { getHeaders } from '../utils/fetch-config';
import {
  ROLES_ENDPOINT,
  ROLE_WITH_ID_ENDPOINT,
} from '../api/endpoints/endpoints';

const toke = getFromSessionStorage(TOKEN);
const config = getHeaders(toke);

export const ROLE = {
  getRoles: async () => {
    try {
      return await axiosAdapter(config).get(ROLES_ENDPOINT);
    } catch (error) {
      throw new Error(error);
    }
  },
  createRole: async (newRoleData) => {
    try {
      return await axiosAdapter().post(ROLES_ENDPOINT, newRoleData);
    } catch (error) {
      throw new Error(error);
    }
  },
  updateRole: async (roleId, updateRoleData) => {
    try {
      return await axiosAdapter(config).patch(
        ROLE_WITH_ID_ENDPOINT(roleId),
        updateRoleData
      );
    } catch (error) {
      throw new Error(error);
    }
  },
  deleteRole: async (roleId) => {
    try {
      return await axiosAdapter(config).delete(ROLE_WITH_ID_ENDPOINT(roleId));
    } catch (error) {
      throw new Error(error);
    }
  },
};
