import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@TOKEN");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [navigate, token]);
  return <Outlet />;
};
