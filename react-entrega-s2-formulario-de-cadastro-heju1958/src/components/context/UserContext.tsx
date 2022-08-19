import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ITechs } from "./TechContext";
import { SubmitHandler } from "react-hook-form";

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

interface UserProviderData {
  user: IUser | null;
  techs: ITechs[];
  loading: boolean;
  setTechs: React.Dispatch<React.SetStateAction<ITechs[]>>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitFunction: (data: IUser) => void;
  onSubmitRegister: (data: IUser) => void;
}

interface UserProps {
  children: ReactNode;
}

export interface IUser {
  name: string;
  password: string | Number;
  email: string;
  bio: string;
  contact: string;
  course_module: string;
  confirm_password?: string;
}

interface IPostLogin {
  token: string;
  user: {
    password: string;
    avatar_url: null;
    bio: string;
    contact: string;
    course_module: string;
    created_at: string;
    email: string;
    id: string;
    name: string;
    techs: [];
    updated_at: string;
    works: [];
  };
}

interface IPostRegister {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: string;
  updated_at: string;
  avatar_url: null;
}

interface IGetUser {
  id: string;
  password: string;
  email: string;
  name: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: [];
  works: [];
  avatar_url: null;
  created_at: string;
  updated_at: string;
}

function UserProvider({ children }: UserProps) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [techs, setTechs] = useState<ITechs[]>([]);

  const url = "https://kenziehub.herokuapp.com/sessions";

  const request = (create: IUser) => {
    setLoading(true);
    axios
      .post<IPostLogin>(url, create)
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

  const onSubmitFunction: SubmitHandler<IUser> = (data) => {
    request(data);
  };

  const urlRegister = "https://kenziehub.herokuapp.com/users";

  const requestRegister = (create: IUser) => {
    axios
      .post<IPostRegister>(urlRegister, create)
      .then(function (response) {
        toast.success("Conta criada com sucesso!");
        navigate(`/`);
      })
      .catch(function (error) {
        toast.error("Ops! Algo deu errado");
      });
  };

  const onSubmitRegister: SubmitHandler<IUser> = (data) => {
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
        .get<IGetUser>(urlAutoLogin)
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
