import { useState, useReducer, createContext } from 'react'

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',
}


export const AppContext = createContext();


export const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return <AppContext.Provider value={{...state}}>
    { children }
  </AppContext.Provider>
  

}





