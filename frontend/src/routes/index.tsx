import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomePage } from "../pages/Home";
import { UserPage } from "../pages/User";
import Anunciante from "../pages/Adm";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<UserPage />} />

      <Route path="/adm" element={<Anunciante/>}/>
    </Routes>
  );
};
