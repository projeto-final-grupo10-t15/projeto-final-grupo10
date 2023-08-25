import { useContext } from "react"
import { UserContext } from "../../providers"
import { SubmitHandler, useForm } from "react-hook-form"
import { IUserLogin } from "../../providers/interfaces"
import { Input } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginData, LoginSchema } from "../../pages/Login/schema"
import { Link } from "react-router-dom"
import { StyledLoginForm } from "./styles"

export const LoginForm = () =>{
    const {loginUser} = useContext(UserContext)
    const {register, handleSubmit,formState:{errors}} = useForm<LoginData>({
        resolver:zodResolver(LoginSchema)
    })

    const submit:SubmitHandler<IUserLogin> = (data) =>{
        loginUser(data)
    }
    return (
        <StyledLoginForm>
            <div className="login__container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit(submit)}>
                    <Input
                        label="Email"
                        placeholder="Digitar email"
                        register={register("email", {required:"Email é obrigatório"})}
                        error={errors.email}
                        type="email"
                        id="email"
                    />
                    <Input
                        label="Senha"
                        placeholder="Digitar senha"
                        register={register("password")}
                        error={errors.password}
                        type="password"
                        id="password"
                    />
                    <Link to="/retrieve" className="forgot__pasword">
                        <p>Esqueci minha senha</p>
                    </Link>
                    <div className="button__container">
                        <Link to="/">
                            <button className="submitBtn" type="submit" >Entrar</button>
                        </Link>
                        <p>Ainda não possui conta ?</p>
                        <Link to="/register">
                        <button className="registerBtn">Cadastrar</button>
                        </Link>

                    </div>
                </form>
            </div>
        </StyledLoginForm>
    )
}