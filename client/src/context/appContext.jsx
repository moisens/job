import { useReducer, createContext } from 'react'
import reducer from "./reducer";



export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}


export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{...state}}>
    { children }
  </AppContext.Provider>
  

}





