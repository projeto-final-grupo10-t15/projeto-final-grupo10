import { Footer } from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { LoginForm } from "../../Components/LoginForm";
import { StyledMain } from "./style";

export const Login = () => {
  return (
    <>
      <StyledMain>
        <Header />
        <LoginForm />
        <Footer />
      </StyledMain>
    </>
  );
};
