import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomePage } from "../pages/Home";
import { UserPage } from "../pages/User";

import Anunciante from "../pages/Adm";
import { ProtectedRoutes } from "../Components/ProtectedRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<ProtectedRoutes />}>
        <Route index element={<UserPage />} />
      </Route>
      <Route path="/adm" element={<ProtectedRoutes />}>
        <Route index element={<Anunciante />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
