import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Components/Authentication/Login';
import Register from './Components/Authentication/Register';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Universitiesspage from "./Components/UniversitiesPaage/Universitiespage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<App />}></Route>
      <Route path="/topuniversities" element={<Universitiesspage />} /> 
      
        {/* Login and register route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>
);