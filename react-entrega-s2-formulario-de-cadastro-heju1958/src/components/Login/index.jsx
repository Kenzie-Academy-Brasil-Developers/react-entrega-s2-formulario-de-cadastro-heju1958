import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { formSchemaLogin } from "../validations";
import { Form, Container } from "../Styles";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = ({ setLoading, loading, setUser }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchemaLogin),
  });

  const onSubmitFunction = (data) => {
    request(data);
  };

  const url = "https://kenziehub.herokuapp.com/sessions";

  const request = (create) => {
    setLoading(true);
    axios
      .post(url, create)
      .then(function (response) {
        localStorage.clear();
        setUser(response.data.user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user.id);
        toast.success("Login bem sucedido!");
        setLoading(false);
        navigate(`/dasboard`);
      })
      .catch(function (error) {
        toast.error("Ops! verifique seus dados");
        setLoading(false);
      });
  };

  return (
    <>
      <Container initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <img src="./logo.png" alt="logo" />
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
