import perfilImg from "../../assets/perfil Img.svg";
import { CardUserInfoContainer } from "./style";

interface CardUserInfoProps {
  button?: string;
}

const CardUserInfo = ({ button }: CardUserInfoProps) => {
  return (
    <CardUserInfoContainer>
      <div className="perfil__box">
        <div className="perfil__box--img">
          <img src={perfilImg} alt="perfil" />
        </div>
        <div className="perfil__name">
          <h3>Samuel Leão</h3>
          <p>Anunciante</p>
        </div>
        <div className="perfil__box--info">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
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
