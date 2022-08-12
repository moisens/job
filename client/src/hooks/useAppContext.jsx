import { useContext } from "react";
import { AppContext } from "../context/appContext";


const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw Error('useAppContext must be used inside AppContext!');
  }
  return context;
}

export default useAppContext;


