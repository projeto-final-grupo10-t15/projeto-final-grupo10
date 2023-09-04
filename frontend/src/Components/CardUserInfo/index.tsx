import { useContext } from "react";
import perfilImg from "../../assets/perfil Img.svg";
import { CardUserInfoContainer } from "./style";
import { UserContext } from "../../Contexts/User";

interface CardUserInfoProps {
  button?: string;
}

const CardUserInfo = ({ button }: CardUserInfoProps) => {
  const {user} = useContext(UserContext)
  return (
    <CardUserInfoContainer>
      <div className="perfil__box">
        <div className="perfil__box--img">
          <img src={perfilImg} alt="perfil" />
        </div>
        <div className="perfil__name">
          <h3>{user?.name}</h3>
          <p>Anunciante</p>
        </div>
        <div className="perfil__box--info">
          <p>
            {user?.description}
          </p>
        </div>
        {button === "Anunciante" && (
          <div className="containerBtn">
            <button>Criar Anuncio</button>
          </div>
        )}
      </div>
    </CardUserInfoContainer>
  );
};

export default CardUserInfo;
