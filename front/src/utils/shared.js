export const getDate = (data) => {
  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

export const tranformFormatTwentyFour = (hour) => {
  const time = hour?.split(':');
  const hours = Number(time?.at(0));
  const minutes = Number(time?.at(1));
  if (hours < 10) {
    return `0${hours}:${minutes} a.m.`;
  }
  return `${hours}:${minutes} p.m.`;
};
