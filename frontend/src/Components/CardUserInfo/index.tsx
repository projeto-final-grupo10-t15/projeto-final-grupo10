import { useContext } from "react";
import { CardUserInfoContainer } from "./style";
import { UserContext } from "../../Contexts/User";

interface CardUserInfoProps {
  button?: string;
}

const CardUserInfo = ({ button }: CardUserInfoProps) => {
  const { user } = useContext(UserContext);
  return (
    <CardUserInfoContainer>
      <div className="perfil__box">
        <div className="perfil__box--img">
          <img src={user?.profile_image} alt="perfil" />
        </div>
        <div className="perfil__name">
          <h3>{user?.name}</h3>
          <p></p>
        </div>
        <div className="perfil__box--info">
          <p>{user?.description}</p>
        </div>
        {button === "" && (
          <div className="containerBtn">
            <button>Criar Anuncio</button>
          </div>
        )}
      </div>
    </CardUserInfoContainer>
  );
};

export default CardUserInfo;
