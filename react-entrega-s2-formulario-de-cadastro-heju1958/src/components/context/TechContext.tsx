import axios from "axios";
import { useContext, createContext, ReactNode } from "react";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";

export interface ITechs {
  id: string;
  title: string;
  status: string;
}

interface TechProps {
  children: ReactNode;
}

interface TechProviderData {
  deleteTech: (id: string) => void;
  createTech: (data: ITechs) => void;
}

export const TechContext = createContext<TechProviderData>(
  {} as TechProviderData
);

interface IPost {
  created_at: string;
  id: string;
  status: string;
  title: string;
  update_at: string;
  user: { id: string };
}

type DeleteResponse = "";

function TechProvider({ children }: TechProps) {
  const { setLoading, techs, setTechs } = useContext(UserContext);

  const createTech = (data: ITechs) => {
    const token = localStorage.getItem("token");
    const url = "https://kenziehub.herokuapp.com/users/techs";
    setLoading(true);
    if (token) {
      axios
        .post<IPost>(url, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          setTechs([...techs, response.data]);
        })
        .catch(function (error) {
          toast.error("Ops! verifique seus dados");
        })
        .finally(function () {
          setLoading(false);
        });
    }
  };

  const deleteTech = (id: string) => {
    const token = localStorage.getItem("token");
    const url = `https://kenziehub.herokuapp.com/users/techs/${id}`;
    setLoading(true);
    if (token) {
      axios
        .delete<DeleteResponse>(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          const remove = techs.filter((elem: ITechs) => elem.id !== id);
          setTechs(remove);
        })
        .catch(function (error) {
          toast.error("Ops! verifique seus dados");
        })
        .finally(function () {
          setLoading(false);
        });
    }
  };

  return (
    <TechContext.Provider value={{ deleteTech, createTech }}>
      {children}
    </TechContext.Provider>
  );
}

export default TechProvider;
