import { userActionTypes } from "./../../constants/actionConstants";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});
