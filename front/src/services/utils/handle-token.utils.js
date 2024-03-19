export const saveOnSessionStorage = (key, toSave) => {
  if (toSave) {
    sessionStorage.setItem(key, toSave);
  }
};

export const getFromSessionStorage = (key) => {
  return sessionStorage.getItem(key);
};

export const removefromSessionStorage = (key) => {
  sessionStorage.removeItem(key);
};
