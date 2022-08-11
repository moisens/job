import {
  Dashboard,
  Register,
  Landing,
  Error
} from "./pages";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
