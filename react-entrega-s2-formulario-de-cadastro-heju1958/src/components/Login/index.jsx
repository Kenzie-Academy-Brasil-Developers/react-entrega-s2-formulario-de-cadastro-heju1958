import { formSchemaLogin } from "../validations";
import { Form, Container } from "../Styles";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { onSubmitFunction, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  return (
    <>
      <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img src="./Logo.png" alt="logo" className="imgLogin"/>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <p className="conta">Login</p>
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
          <button type="submit" className="botao_entrar" disabled={loading}>
            {loading ? "Carregando" : "Entrar"}
          </button>
          <p>Ainda não possui uma conta?</p>
          <button
            className="botao_cadastro"
            onClick={() => navigate(`/register`)}
          >
            Cadastre-se
          </button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
