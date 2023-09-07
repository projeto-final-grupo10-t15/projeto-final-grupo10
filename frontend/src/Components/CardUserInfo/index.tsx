import { useContext } from "react";
import { CardUserInfoContainer } from "./style";
import { UserContext } from "../../Contexts/User";
import { useLocation } from "react-router-dom";

const CardUserInfo = () => {
  const { users } = useContext(UserContext);
  const location = useLocation();
  const HiddenbuttonCreateAd = () => {
    if (location.pathname === "/adm") return (location.pathname = "/adm");
  };
  return (
    <CardUserInfoContainer>
      <div className="perfil__box">
        <div className="perfil__box--img">
          <img src={users?.profile_image} alt="perfil" />
        </div>
        <div className="perfil__name">
          <h3>{users?.name}</h3>
          <p></p>
        </div>
        <div className="perfil__box--info">
          <p>{users?.description}</p>
        </div>
        {HiddenbuttonCreateAd() && (
          <div className="containerBtn">
            <button>Criar Anuncio</button>
          </div>
        )}
      </div>
    </CardUserInfoContainer>
  );
};

export default CardUserInfo;
