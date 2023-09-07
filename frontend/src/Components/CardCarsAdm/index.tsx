import SectionCarsAdm from "./style";
import { useContext } from "react";
import { CarContext } from "../../Contexts/Car";
const CardCarsAdm = () => {
  const { cars } = useContext(CarContext);
  return (
    <SectionCarsAdm>
      <ul>
        {cars.map((car) => (
          <li>
            <span className="actived">Ativo</span>
            <img src={car.first_image} alt="" />
            <h3>
              {car.brand} - <span>{car.model}</span>
            </h3>
            <p>{car.description}</p>
            <div>
              <div>
                <p>{car.mileage} Km</p>
                <p>{car.year}</p>
              </div>
              <span>R$ {car.price}</span>
            </div>
            <div className="boxButtons">
              <button>Editar</button>
              <button>Ver detalhes</button>
            </div>
          </li>
        ))}
      </ul>
    </SectionCarsAdm>
  );
};
export default CardCarsAdm;
