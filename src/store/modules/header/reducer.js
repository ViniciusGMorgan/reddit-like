// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case "FILTER":
      return {
        ...state,
        value: action.value,
      };

    default:
      return state;
  }
};
