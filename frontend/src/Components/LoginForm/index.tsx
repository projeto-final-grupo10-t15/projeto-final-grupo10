import { useContext } from "react";
import { UserContext } from "../../Contexts/User";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserLogin } from "../../Contexts/User/interfaces";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, LoginSchema } from "../../pages/Login/schema";
import { Link } from "react-router-dom";
import { StyledLoginForm } from "./styles";

export const LoginForm = () => {
  const { loginUser, loading, setLoading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });

  const submit: SubmitHandler<IUserLogin> = (data) => {
    loginUser(data, setLoading);
  };
  return (
    <>
      {loading ? (
        <div>Carregando...</div>
      ) : (
        <>
          <StyledLoginForm>
            <div className="login__container">
              <form onSubmit={handleSubmit(submit)}>
                <h2>Login</h2>
                <Input
                  label="Email"
                  placeholder="Digitar email"
                  register={register("email", {
                    required: "Email é obrigatório",
                  })}
                  error={errors.email}
                  type="email"
                  id="email"
                  disabled={loading}
                />
                <Input
                  label="Senha"
                  placeholder="Digitar senha"
                  register={register("password")}
                  error={errors.password}
                  type="password"
                  id="password"
                  disabled={loading}
                />
                <Link to="/retrieve" className="forgot__pasword">
                  <p>Esqueci minha senha</p>
                </Link>
                <div className="button__container">
                  <button className="submitBtn" type="submit">
                    {loading ? "Entrando..." : "Entrar"}
                  </button>
                  <p>Ainda não possui conta ?</p>
                  <Link to="/register">
                    <button className="registerBtn">Cadastrar</button>
                  </Link>
                </div>
              </form>
            </div>
          </StyledLoginForm>
        </>
      )}
    </>
  );
};
