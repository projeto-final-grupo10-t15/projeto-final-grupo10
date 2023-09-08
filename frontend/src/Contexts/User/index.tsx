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
  users: IUser | null;
  setUsers: React.Dispatch<React.SetStateAction<IUser | null>>;
};

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<IUser | null>(null);
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

  useEffect(() => {
    const Users = async () => {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@ID");
      const response = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    };
    Users();
  }, []);

  const registerUser = async (
    data: IUserRegister,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
      setUsers(response.data.user);
      navigate("/login");
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (
    data: IUserLogin,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ): Promise<void> => {
    try {
      setLoading(true);
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
    setUsers(null);
    navigate("/");
  };

  const updateUser = async (data: IUserUpdate): Promise<void> => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@ID");
    try {
      const response = await api.patch(`/users/${id}`, data);
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUsers(response.data);
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
        users,
        setUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
