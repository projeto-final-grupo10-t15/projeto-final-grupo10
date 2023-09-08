

import { useContext, useState } from "react";

import { CardUserInfoContainer } from "./style";
import { UserContext } from "../../Contexts/User";
import { useLocation } from "react-router-dom";
import { UpdateModal } from "../UpdateModal";
import { CreateCarForm } from "../CreateCarForm";

const CardUserInfo = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  const [openModal, setOpenModal] = useState<boolean>(false)
  const toggleModal = () => setOpenModal(!openModal)
  const HiddenTagsForAdm = () => {
    if (location.pathname === "/adm") return (location.pathname = "/adm");
  };

  return (
    <CardUserInfoContainer>
      <div className="perfil__box">
        <span>{user?.name}</span>
        <div className="perfil__name">
          <h3>{user?.name}</h3>
          {HiddenTagsForAdm() && <p>Anunciante</p>}
        </div>
        <div className="perfil__box--info">
          <p>{user?.description}</p>
        </div>
        {HiddenTagsForAdm() && (
          <div className="containerBtn">
            <button onClick={toggleModal}>Criar Anuncio</button>
          </div>
        )}
      </div>
      {openModal && (
        <UpdateModal toggleModal={toggleModal}>
          <CreateCarForm />
        </UpdateModal>
      )}
    </CardUserInfoContainer>
  );
};

export default CardUserInfo;
