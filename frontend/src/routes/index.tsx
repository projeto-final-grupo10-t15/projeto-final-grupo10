import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomePage } from "../pages/Home";
import { UserPage } from "../pages/User";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/user" element={<UserPage />} />
    </Routes>
  );
};
