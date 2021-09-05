export const SET_STATUS = 'SET_STATUS';

export const setStatus = (
  val: string,
  newStatus: string,
): { type: string, status: { status: string, newStatus: string } } => {
  return {
    type: SET_STATUS,
    status: {
      status: val,
      newStatus: newStatus,
    },
  };
};
