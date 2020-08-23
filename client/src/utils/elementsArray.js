export const createArr = (obj) => {
  const elArr = [];
  for (const key in obj) {
    elArr.push({
      id: key,
      config: obj[key],
    });
  }
  return elArr;
};
