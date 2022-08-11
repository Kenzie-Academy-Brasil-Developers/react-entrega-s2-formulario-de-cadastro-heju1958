import axios from "axios";
import { useContext, createContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";

export const TechContext = createContext({});

function TechProvider({ children }) {
  const { setLoading, techs, setTechs } = useContext(UserContext);

  const createTech = (data) => {
    const token = localStorage.getItem("token");
    const url = "https://kenziehub.herokuapp.com/users/techs";
    setLoading(true);
    if (token) {
      axios
        .post(url, data, {
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

  const deleteTech = (id) => {
    const token = localStorage.getItem("token");
    const url = `https://kenziehub.herokuapp.com/users/techs/${id}`;
    setLoading(true);
    if (token) {
      axios
        .delete(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (response) {
          const remove = techs.filter((elem) => elem.id !== id);
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
