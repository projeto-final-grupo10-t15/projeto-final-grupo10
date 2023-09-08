import { ChangeEvent, useContext, useState } from "react";
import { UserContext } from "../../Contexts/User";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUserRegister } from "../../Contexts/User/interfaces";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterData, RegisterSchema } from "../../pages/Register/schema";
import { StyledRegisterForm } from "./styles";
import { StyledLoading } from "../Loading";

export const RegisterForm = () => {
  const { registerUser, setLoading, loading } = useContext(UserContext);
  const [userType, setUserType] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const handleUserTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value);
  };

  const submit: SubmitHandler<IUserRegister> = (data: IUserRegister) => {
    data.account_type = userType;
    registerUser(data, setLoading);
  };
  return (
    <>
      {loading ? (
        <StyledLoading>
          <span>Carregando...</span>
        </StyledLoading>
      ) : (
        <>
          <StyledRegisterForm>
            <div className="register__container">
              <form onSubmit={handleSubmit(submit)}>
                <h2>Cadastro</h2>
                <p>Informações pessoais</p>
                <Input
                  label="Nome"
                  placeholder="Ex: Lucas Ribeiro"
                  register={register("name")}
                  error={errors.name}
                  type="text"
                  id="name"
                  disabled={loading}
                />
                <Input
                  label="Email"
                  placeholder="Ex: lucasribeiro@mail.com"
                  register={register("email")}
                  error={errors.email}
                  type="email"
                  id="email"
                  disabled={loading}
                />
                <Input
                  label="CPF"
                  placeholder="000.000.000-00"
                  register={register("cpf")}
                  error={errors.cpf}
                  type="text"
                  id="cpf"
                  disabled={loading}
                />
                <Input
                  label="Celular"
                  placeholder="(DDD) 9999-9999"
                  register={register("contact_number")}
                  error={errors.contact_number}
                  type="text"
                  id="contact_number"
                  disabled={loading}
                />
                <Input
                  label="Data de nascimento"
                  placeholder="00/00/00"
                  register={register("birthdate")}
                  type="date"
                  pattern="\d{4}-\d{2}-\d{2}"
                  id="birthdate"
                  disabled={loading}
                />
                <Input
                  label="Descrição"
                  placeholder="Digitar descrição"
                  register={register("description")}
                  type="text"
                  id="description"
                  disabled={loading}
                />
                <Input
                  label="Imagem de perfil"
                  placeholder="URL da imagem"
                  register={register("profile_image")}
                  type="image"
                  id="profile_image"
                  disabled={loading}
                />
                <p>Informações de endereço</p>
                <Input
                  label="CEP"
                  placeholder="00000.000"
                  register={register("address.zipCode")}
                  type="text"
                  id="zipcode"
                  disabled={loading}
                />
                <Input
                  label="Estado"
                  placeholder="Digitar Estado"
                  register={register("address.estate")}
                  type="text"
                  id="state"
                  disabled={loading}
                />
                <Input
                  label="Cidade"
                  placeholder="Digitar cidade"
                  register={register("address.city")}
                  type="text"
                  id="city"
                  disabled={loading}
                />
                <Input
                  label="Rua"
                  placeholder="Digitar rua"
                  register={register("address.street")}
                  type="text"
                  id="street"
                  disabled={loading}
                />
                <Input
                  label="Número"
                  placeholder="Digitar número"
                  register={register("address.number")}
                  type="text"
                  id="number"
                  disabled={loading}
                />
                <Input
                  label="Complemento"
                  placeholder="Ex: ap 101"
                  register={register("address.complement")}
                  type="text"
                  id="complement"
                  disabled={loading}
                />
                <p>Tipo de conta</p>
                <div className="choice__container">
                  <label
                    htmlFor="buyer"
                    className={`choice ${
                      userType === "Comprador" ? "selected" : ""
                    }`}
                  >
                    <input
                      id="buyer"
                      type="radio"
                      value="Comprador"
                      defaultChecked
                      checked={userType === "Comprador"}
                      {...register("account_type")}
                      onChange={handleUserTypeChange}
                      name="userType"
                      disabled={loading}
                    />
                    Comprador
                  </label>
                  <label
                    htmlFor="announcer"
                    className={`choice ${userType === "" ? "selected" : ""}`}
                  >
                    <input
                      id="announcer"
                      type="radio"
                      value=""
                      checked={userType === ""}
                      {...register("account_type")}
                      onChange={handleUserTypeChange}
                      name="userType"
                      disabled={loading}
                    />
                    Anunciante
                  </label>
                </div>
                <Input
                  label="Senha"
                  placeholder="Digitar senha"
                  register={register("password")}
                  type="password"
                  id="password"
                  disabled={loading}
                />
                <Input
                  label="Confirmar senha"
                  placeholder="Digitar senha novamente"
                  register={register("confirmPassword")}
                  error={errors.confirmPassword}
                  type="password"
                  id="confirmPass"
                  disabled={loading}
                />
                {password !== confirmPassword && <p>As senhas não coincidem</p>}

                <button className="submitBtn" type="submit" disabled={loading}>
                  {loading ? "Cadastrando..." : "Finalizar cadastro"}
                </button>
              </form>
            </div>
          </StyledRegisterForm>
        </>
      )}
    </>
  );
};
