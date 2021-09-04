export const SET_STATUS = "SET_STATUS";

export const setStatus = (val, newStatus) => {
  return {
    type: SET_STATUS,
    status: {
      status: val,
      newStatus: newStatus,
    },
  };
};
