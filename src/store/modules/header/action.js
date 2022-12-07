export function filter(value) {
  return (dispatch) => {
    dispatch({
      type: "FILTER",
      value,
    });
  };
}
