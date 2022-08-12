import { useReducer, createContext } from 'react'
import reducer from "./reducer";
import { DISPLAY_ALERT } from "./actions";


export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}


export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
  }

  return <AppContext.Provider value={{
    ...state,
    displayAlert,
    }}>
    { children }
  </AppContext.Provider>
  

}





