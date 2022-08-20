import { Register, Landing, Error } from "./pages";
import {
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
  AddJob,
} from "./pages/dashboard";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Dashboard</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
