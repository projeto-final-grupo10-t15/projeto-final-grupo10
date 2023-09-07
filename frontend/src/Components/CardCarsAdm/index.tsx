import SectionCarsAdm from "./style";
import imgCar from "../../assets/carsTest.png";
import { useState } from "react";
import { UpdateModal } from "../UpdateModal";
import { UpdateCarForm } from "../UpdateCarForm";
const CardCarsAdm = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const toggleModal = () => setOpenModal(!openModal)
  return (
    <SectionCarsAdm>
      <ul>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button type="button" onClick={toggleModal}> Editar </button>
            <button> Ver detalhes </button>
          </div>
          
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
        <li>
          <span className="actived">Ativo</span>
          <img src={imgCar} alt="" />
          <h3>Nome do Carro - Modelo</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </p>
          <div>
            <div>
              <p>0 Km</p>
              <p>2019</p>
            </div>
            <span>R$ 20.000</span>
          </div>
          <div className="boxButtons">
            <button> Editar </button>
            <button> Ver detalhes </button>
          </div>
        </li>
      </ul>
      
    </SectionCarsAdm>
  );
};
export default CardCarsAdm;
