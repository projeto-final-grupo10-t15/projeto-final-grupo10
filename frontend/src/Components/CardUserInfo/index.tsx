import { useContext, useState } from "react";
import perfilImg from "../../assets/perfil Img.svg";
import { CardUserInfoContainer } from "./style";
import { UserContext } from "../../Contexts/User";
import { UpdateModal } from "../UpdateModal";
import { CreateCarForm } from "../CreateCarForm";

interface CardUserInfoProps {
  button?: string;
}

const CardUserInfo = ({ button }: CardUserInfoProps) => {
  const {user} = useContext(UserContext)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const toggleModal = () => setOpenModal(!openModal)

  
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
            <button onClick={toggleModal}>Criar Anuncio</button>
          </div>
        )}
      </div>
      {openModal && <UpdateModal toggleModal={toggleModal}><CreateCarForm/></UpdateModal>}
    </CardUserInfoContainer>
  );
};

export default CardUserInfo;
