import axios from "axios";
import { useReducer, createContext } from "react";
import reducer from "./reducer";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  //REGISTER_USER_BEGIN,
  //REGISTER_USER_SUCCESS,
  //REGISTER_USER_ERROR,
  //LOGIN_USER_BEGIN,
  //LOGIN_USER_SUCCESS,
  //LOGIN_USER_ERROR,
  SETUP_USER_BEGIN,
  SETUP_USER_SUCCESS,
  SETUP_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_JOB_BEGIN,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_ERROR,
  GET_JOBS_BEGIN,
  GET_JOBS_SUCCESS,
  SET_EDIT_JOB,
} from "./actions";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || "",
  showSidebar: false,
  isEditing: false,
  editJobId: "",
  position: "",
  company: "",
  jobLocation: userLocation || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["pending", "interview", "declined"],
  status: "pending",
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
};

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //Instance axios
  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  //request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserToLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  //const registerUser = async (currentUser) => {
  //  dispatch({ type: "REGISTER_USER_BEGIN" });
  //
  //  try {
  //    const response = await axios.post("/api/v1/auth/register", currentUser);
  //    console.log(response);
  //    const { user, token, location } = response.data;
  //    dispatch({
  //      type: "REGISTER_USER_SUCCESS",
  //      payload: { user, token, location },
  //    });
  //
  //    addUserToLocalStorage({ user, token, location });
  //  } catch (error) {
  //    //console.log(error.response);
  //    dispatch({
  //      type: "REGISTER_USER_ERROR",
  //      payload: { msg: error.response.data.msg },
  //    });
  //  }
  //  clearAlert();
  //};

  //const loginUser = async (currentUser) => {
  //  dispatch({ type: "LOGIN_USER_BEGIN" });
  //
  //  try {
  //    const { data } = await axios.post("api/v1/auth/login", currentUser);
  //    const { user, token, location } = data;
  //
  //    dispatch({
  //      type: LOGIN_USER_SUCCESS,
  //      payload: { user, token, location },
  //    });
  //    addUserToLocalStorage({ user, token, location });
  //  } catch (error) {
  //    dispatch({
  //      type: LOGIN_USER_ERROR,
  //      payload: { msg: error.response.data.msg },
  //    });
  //  }
  //  clearAlert();
  //};

  //Refactoring register and login (Both code are doing exactly the same thing!)
  const setupUser = async ({ currentUser, endPoint, alertText }) => {
    dispatch({ type: "SETUP_USER_BEGIN" });

    try {
      const { data } = await axios.post(`api/v1/auth/${endPoint}`, currentUser);
      const { user, token, location } = data;

      dispatch({
        type: SETUP_USER_SUCCESS,
        payload: { user, token, location, alertText },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: SETUP_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserToLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateUser", currentUser);
      const { user, location, token } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, location, token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: "CLEAR_VALUES" });
  };

  const createJob = async () => {
    dispatch({ type: CREATE_JOB_BEGIN });
    try {
      const { position, company, jobLocation, jobType, status } = state;
      await authFetch.post("/jobs", {
        position,
        company,
        jobLocation,
        jobType,
        status,
      });
      dispatch({ type: CREATE_JOB_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_JOB_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getJobs = async () => {
    let url = `/jobs`;
    dispatch({ type: GET_JOBS_BEGIN });
    try {
      const { data } = await authFetch(url);
      const { jobs, totalJobs, numOfPages } = data;
      dispatch({
        type: GET_JOBS_SUCCESS,
        payload: { jobs, totalJobs, numOfPages },
      });
    } catch (error) {
      console.log(error.response);
      logoutUser();
    }
    clearAlert();
  };

  const setEditJob = (id) => {
    dispatch({ type: SET_EDIT_JOB, payload: { id } });
  };

  const editJob = () => {
    console.log(`Edit job!`);
  }

  const deleteJob = (id) => {
    console.log(`delete ${_id}`);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        //registerUser,
        //loginUser,
        setupUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleChange,
        clearValues,
        createJob,
        getJobs,
        setEditJob,
        deleteJob,
        editJob
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
