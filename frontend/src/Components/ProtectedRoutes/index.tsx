import { useContext, useEffect } from "react";
import { UserContext } from "../../Contexts/User";
import { Outlet, useNavigate } from "react-router";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);
  return user ? <Outlet /> : null;
};
