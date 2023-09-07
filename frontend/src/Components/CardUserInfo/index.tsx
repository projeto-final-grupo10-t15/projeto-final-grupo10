<<<<<<< HEAD
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
=======
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

  
>>>>>>> 9c9f6a5b057c4fb29c4afee5ffc4be90387ac5b5
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
            <button onClick={toggleModal}>Criar Anuncio</button>
          </div>
        )}
      </div>
      {openModal && <UpdateModal toggleModal={toggleModal}><CreateCarForm/></UpdateModal>}
    </CardUserInfoContainer>
  );
};

export default CardUserInfo;
