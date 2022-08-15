import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../validations";
import { Form, Container, Header } from "../Styles";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { onSubmitRegister } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header>
        <img src="./Logo.png" alt="logo" />
        <button onClick={() => navigate(`/`)}>Voltar</button>
      </Header>
      <Form onSubmit={handleSubmit(onSubmitRegister)}>
        <p className="conta">Crie sua Conta</p>
        <p>Rapido e grátis, vamos nessa</p>
        <label>Nome</label>
        <input
          type="text"
          placeholder="Digite aqui seu nome"
          {...register("name")}
        />
        <span>{errors.name?.message}</span>
        <label>Email</label>
        <input
          type="email"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
        <label>Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirme aqui sua senha"
          {...register("confirm_password")}
        />
        <span>{errors.confirm_password?.message}</span>
        <label>Bio</label>
        <input type="text" placeholder="Fale sobre você" {...register("bio")} />
        <span>{errors.bio?.message}</span>
        <label>Contato</label>
        <input
          type="text"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <span>{errors.contact?.message}</span>
        <label>Selecionar módulo</label>
        <select {...register("course_module")}>
          {" "}
          <option value={"Primeiro módulo (Introdução ao Frontend)"}>
            Primeiro módulo
          </option>
          <option value={"Segundo módulo (Frontend avançado)"}>
            Segundo módulo
          </option>
          <option value={"Terceiro módulo (Introdução ao Backend)"}>
            Terceiro módulo
          </option>
          <option value={"Quarto módulo (Backend Avançado)"}>
            Quarto módulo
          </option>
        </select>
        <span>{errors.course_module?.message}</span>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Register;
