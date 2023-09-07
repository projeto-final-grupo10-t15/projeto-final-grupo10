import { SubmitHandler, useForm } from "react-hook-form"
import { IUpdateCar } from "./interfaces"
import { zodResolver } from "@hookform/resolvers/zod"
import { UpdateCarSchema } from "./schema"
import { useContext } from "react"
import { CarContext } from "../../Contexts/Car"
import { Input } from "../Input"
import { UpdateForm } from "./styles"




export const UpdateCarForm = () =>{
    const {updateCar} = useContext(CarContext)
    const {register, handleSubmit, formState: { errors }} = useForm<IUpdateCar>({
        resolver: zodResolver(UpdateCarSchema)
    })

    const submit: SubmitHandler<IUpdateCar> = (data) =>{
        updateCar(id,data)
    }
    return(
        <UpdateForm>
            <h2>Editar Anúncio</h2>
            <p className="info_announce">Informações do veículo</p>
            <form onSubmit={handleSubmit(submit)}>
                <Input
                label="Marca"
                placeholder="Digite aqui uma marca"
                register={register("brand")}
                error={errors.brand}
                type="text"
                id="brand"
                />
                <Input
                label="Modelo"
                placeholder="Digite aqui um modelo"
                register={register("model")}
                error={errors.model}
                type="text"
                id="model"
                />
                <div className="row__container">
                    <div className="row__inputs">

                        <Input
                        label="Ano"
                        placeholder="2018"
                        register={register("year")}
                        error={errors.year}
                        type="text"
                        id="year"
                        />
                        <Input
                        label="Combústivel"
                        placeholder="Gasolina/etanol"
                        register={register("fuel_type")}
                        error={errors.fuel_type}
                        type="text"
                        id="fuel_type"
                        />
                    </div>
                    <div className="row__inputs">

                    <Input
                        label="Quilometragem"
                        placeholder="30.000"
                        register={register("mileage")}
                        error={errors.mileage}
                        type="text"
                        id="mileage"
                        />
                        <Input
                        label="Cor"
                        placeholder="Branco"
                        register={register("color")}
                        error={errors.color}
                        type="text"
                        id="color"
                        />
                    </div>
                    <div className="row__inputs">

                    <Input
                        label="Preço tabela FIPE"
                        placeholder="R$ 48.000,00"
                        register={register("FIPE_price")}
                        error={errors.FIPE_price}
                        type="text"
                        id="FIPE_price"
                        />
                        <Input
                        label="Preço"
                        placeholder="R$ 50.000,00"
                        register={register("price")}
                        error={errors.price}
                        type="text"
                        id="price"
                        />
                    </div>
                </div>
                <Input
                        label="Descrição"
                        placeholder="Digite aqui a descrição do veículo"
                        register={register("description")}
                        error={errors.description}
                        type="text"
                        id="description"
                        />
                <Input
                        label="Imagem da capa"
                        placeholder="http://image.com"
                        register={register("cover_image")}
                        error={errors.cover_image}
                        type="text"
                        id="cover_image"
                        />
                <Input
                        label="1º Imagem da galeria"
                        placeholder="http://image.com"
                        register={register("first_image")}
                        error={errors.first_image}
                        type="text"
                        id="first_image"
                        />
                <div className="btn__box">
                    <button className="deleteBtn" type="submit">Excluir anúncio</button>
                    <button className="editBtn" type="submit">Salvar alterações</button>

                </div>
            </form>
        </UpdateForm>
    )
}