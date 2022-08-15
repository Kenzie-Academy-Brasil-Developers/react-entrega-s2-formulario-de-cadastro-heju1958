import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [techs, setTechs] = useState([]);

  const url = "https://kenziehub.herokuapp.com/sessions";

  const request = (create) => {
    setLoading(true);
    axios
      .post(url, create)
      .then(function (response) {
        localStorage.clear();
        setUser(response.data.user);
        setTechs(response.data.user.techs);
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

  const onSubmitFunction = (data) => {
    request(data);
  };

  const urlRegister = "https://kenziehub.herokuapp.com/users";

  const requestRegister = (create) => {
    axios
      .post(urlRegister, create)
      .then(function (response) {
        toast.success("Conta criada com sucesso!");
        navigate(`/`);
      })
      .catch(function (error) {
        toast.error("Ops! Algo deu errado");
      });
  };

  const onSubmitRegister = (data) => {
    const { name, password, email, bio, contact, course_module } = data;
    const newData = {
      name,
      password,
      email,
      bio,
      contact,
      course_module,
    };
    requestRegister(newData);
  };

  useEffect(() => {
    const id = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const urlAutoLogin = `https://kenziehub.herokuapp.com/users/${id}`;
    if (token && id) {
      axios
        .get(urlAutoLogin)
        .then(function (response) {
          setUser(response.data);
          setTechs(response.data.techs);
        })
        .catch(function (error) {
          localStorage.clear();
        });
    } else return navigate("/");
  }, []);

  return (
    <UserContext.Provider
      value={{
        onSubmitFunction,
        onSubmitRegister,
        loading,
        user,
        setLoading,
        setUser,
        techs,
        setTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
