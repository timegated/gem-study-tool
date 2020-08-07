export const changeHandler = (e, elId, state, setState) => {
  const updatedState = {
    ...state,
  };
  const updatedFormEl = {
    ...updatedState[elId],
  };
  updatedFormEl.value = e.target.value;
  updatedState[elId] = updatedFormEl;
  setState(updatedState);
};
