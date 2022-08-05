import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../validations";
import { Form, Container, Header } from "../Styles";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    const { name, password, email, bio, contact, course_module } = data;
    const newData = {
      name,
      password,
      email,
      bio,
      contact,
      course_module,
    };
    request(newData);
  };

  const url = "https://kenziehub.herokuapp.com/users";

  const request = (create) => {
    axios
      .post(url, create)
      .then(function (response) {
        toast.success("Conta criada com sucesso!");
        navigate(`/`);
      })
      .catch(function (error) {
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Header>
        <img src="./Logo.png" alt="logo" />
        <button onClick={() => navigate(`/`)}>Voltar</button>
      </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
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
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value={"Segundo módulo (Frontend avançado)"}>
            Segundo módulo (Frontend avançado)
          </option>
          <option value={"Terceiro módulo (Introdução ao Backend)"}>
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value={"Quarto módulo (Backend Avançado)"}>
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <span>{errors.course_module?.message}</span>
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default Register;
