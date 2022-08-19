import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }

  if (action.type === "CLEAR_ALERT") {
    return {
      ...state,
      showAlert: false,
      alertType: "",
      alertText: "",
    };
  }

  //if (action.type === REGISTER_USER_BEGIN) {
  //  return { ...state, isLoading: true };
  //}
//
  //if (action.type === REGISTER_USER_SUCCESS) {
  //  return {
  //    ...state,
  //    user: action.payload.user,
  //    token: action.payload.token,
  //    userLocation: action.payload.location,
  //    jobLocation: action.payload.location,
  //    isLoading: false,
  //    showAlert: true,
  //    alertType: "success",
  //    alertText: "User created! Redirecting...",
  //  };
  //}
//
  //if (action.type === REGISTER_USER_ERROR) {
  //  return {
  //    ...state,
  //    isLoading: false,
  //    showAlert: true,
  //    alertType: "danger",
  //    alertText: action.payload.msg,
  //  };
  //}
//
  //if (action.type === LOGIN_USER_BEGIN) {
  //  return {
  //    ...state,
  //    isLoading: true,
  //  };
  //}
//
  //if (action.type === LOGIN_USER_SUCCESS) {
  //  return {
  //    ...state,
  //    isLoading: false,
  //    user: action.payload.user,
  //    token: action.payload.token,
  //    userLocation: action.payload.location,
  //    jobLocation: action.payload.location,
  //    showAlert: true,
  //    alertType: "success",
  //    alertText: "Successfully logged in! Redirecting...",
  //  };
  //}
//
  //if (action.type === LOGIN_USER_ERROR) {
  //  return {
  //    ...state,
  //    isLoading: false,
  //    showAlert: true,
  //    alertType: "danger",
  //    alertText: action.payload.msg,
  //  };
  //}

  //Refactoring Login & Register
  if (action.type === SETUP_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === SETUP_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: "success",
      alertText: action.payload.alertText,
    };
  }

  if (action.type === SETUP_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: "danger",
      alertText: action.payload.msg,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
