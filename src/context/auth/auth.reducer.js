export function authReducer(state, action) {
    switch (action.type) {
      case "INITIALIZE_USER_DATA": {
        return {
          ...state,
          userData: action.payload,
          isUserLogin: true,
          status: "fulfilled",
        };
      }
      case "UPDATE_USER_DATA": {
        return {
          ...state,
          userData:
            state.userData !== null
              ? {
                  ...state.userData,
                  displayName: action.payload.displayName,
                  email: action.payload.email,
                }
              : null,
        };
      }
      case "LOGOUT": {
        return {
          ...state,
          isUserLogin: false,
          userData: null,
          status: "idle",
        };
      }
  
      default:
        return state;
    }
  }
  