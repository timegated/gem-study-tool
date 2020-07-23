export const createArr = (obj) => {
  const elArr = [];
  for (let key in obj) {
    elArr.push({
      id: key,
      config: obj[key],
    });
  }
  return elArr;
};
