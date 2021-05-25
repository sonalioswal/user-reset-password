import { RESET_PASSWORD } from "actions/ResetPassword";

const initialState = {
    users: JSON.parse(localStorage.getItem('users'))
}

const resetPassword = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
          ...state,
          users: [...action.payload]
      }
    default:
      return state;
  }
};

export default resetPassword;
