import { TechContext } from "../context/TechContext";
import { useContext } from "react";
import { Modal } from "../Styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaTech } from "../validations";
import { IModal } from "../Dasboard";
import { ITechs } from "../context/TechContext";

const AddModal = ({ setModal }: IModal) => {

  const { createTech } = useContext(TechContext);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITechs>({
    resolver: yupResolver(formSchemaTech),
  });

  const onSubmitFunction: SubmitHandler<ITechs> = (data) => {
    createTech(data);
  };

  return (
    <Modal initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div>
        <p>Cadastrar Tecnologia</p>
        <button className="x" onClick={() => setModal(false)}>
          X
        </button>
      </div>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Nome da tecnologia"
          {...register("title")}
        />
        <label>Selecionar status</label>
        <select {...register("status")}>
          <option value={"Iniciante"}>Iniciante</option>
          <option value={"Intermediário"}>Intermediário</option>
          <option value={"Avançado"}>Avançado</option>
        </select>
        <button>Cadastrar Tecnologia</button>
      </form>
    </Modal>
  );
};
export default AddModal;
