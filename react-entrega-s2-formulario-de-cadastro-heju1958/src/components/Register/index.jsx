import * as yup from "yup";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

import axios from "axios";

import FeedBack from "../FeedBack";

const Register = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirm_password: yup.string().required("Senha obrigatória"),
    name: yup.string().required("Nome obrigatório"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Conato obrigatório"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [login, setLogin] = useState([]);

  const onSubmitFunction = (data) => {
    setLogin(data);
    request(login);
  };

  const url = "https://kenziehub.herokuapp.com/users";

  const [isLogin, setIslogin] = useState(false);

  const request = (login) => {
    axios
      .post(url, login)
      .then(function (response) {
        setIslogin(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        Logo
        <button>Voltar</button>
      </div>
      <p>Crie sua Conta</p>
      <p>Rapido e grátis, vamos nessa</p>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        {errors.name?.message}
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email?.message}
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <label>Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirme aqui sua senha"
          {...register("confirm_password")}
        />
        {errors.confirm_password?.message}
        <label>Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        {errors.bio?.message}
        <label>Contato</label>
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact?.message}
        <label>Selecionar módulo</label>
        <select {...register("course_module")}>
          {" "}
          <option value={1}>Primeiro Módulo</option>
          <option value={2}>Segundo Módulo (Frontend avançado)</option>
          <option value={3}>Terceiro Módulo</option>
          <option value={4}>Quarto Módulo</option>
          <option value={5}>Quinto Módulo</option>
          <option value={6}>Sexto Módulo</option>
        </select>
        {errors.course_module?.message}
        <button type="submit">Cadastrar</button>
      </form>
      <div>
        <FeedBack isLogin={isLogin} />
      </div>
    </div>
  );
};

export default Register;
