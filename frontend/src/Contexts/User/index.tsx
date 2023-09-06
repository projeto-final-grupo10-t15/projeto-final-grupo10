import React, { createContext, useEffect, useState } from "react";
import {
  IUser,
  IUserLogin,
  IUserProviderProps,
  IUserRegister,
  IUserUpdate,
  LoginResponse,
} from "./interfaces";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

type IUserContext = {
  loginUser: (
    data: IUserLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  registerUser: (
    data: IUserRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => Promise<void>;
  logout: () => void;
  updateUser: (data: IUserUpdate) => Promise<void>;
  user: IUser | null;
};

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      setLoading(false);
      return;
    }
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setLoading(false);
  }, []);

  const registerUser = async (
    data: IUserRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
    
      setUser(response.data.user);
      navigate("/login");
<<<<<<< HEAD
      setLoading(false);
=======
      setLoading(false)
>>>>>>> 462aaff1b9acb0e5fa0fde73db236125a1cdd11c
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (
    data: IUserLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      const response = await api.post<LoginResponse>("/login", data);
      const { token, id } = response.data;
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      localStorage.setItem("@TOKEN", token);
      localStorage.setItem("@ID", id!);
      navigate("/");
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = (): void => {
    localStorage.removeItem("@TOKEN");
    setUser(null);
    navigate("/");
  };

  const updateUser = async (data: IUserUpdate): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@ID");
    try {
      const response = await api.patch(`/users/${id}`, data);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider
      value={{
        loginUser,
        loading,
        setLoading,
        registerUser,
        logout,
        updateUser,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
