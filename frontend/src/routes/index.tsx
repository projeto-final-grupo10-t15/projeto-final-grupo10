import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
<<<<<<< HEAD
import { HomePage } from "../pages/Home";
import { UserPage } from "../pages/User";
=======
import { Home } from "../pages/Home";
>>>>>>> 7706aca52891d2c1d7337e8fd10a083824c9d1a9
import Anunciante from "../pages/Adm";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
<<<<<<< HEAD
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<UserPage />} />

      <Route path="/adm" element={<Anunciante/>}/>
=======
      <Route path="/" element={<Home />} />
      <Route path="/adm" element={<Anunciante />} />
>>>>>>> 7706aca52891d2c1d7337e8fd10a083824c9d1a9
    </Routes>
  );
};
