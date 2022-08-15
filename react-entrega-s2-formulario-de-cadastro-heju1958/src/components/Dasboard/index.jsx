import AddModal from "../AddModal/addModal";
import { Box, Header, Lista } from "../Styles";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { TechContext } from "../context/TechContext";

const Dasboard = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { user, techs, loading } = useContext(UserContext);
  const { deleteTech } = useContext(TechContext);

  return user ? (
    <Box>
      <Header>
        <img src="./Logo.png" alt="logo" />
        <button
          onClick={() => {
            navigate(`/`);
            localStorage.clear();
          }}
        >
          Sair
        </button>
      </Header>
      <div className="dadosUser">
        <p className="nameUser">Olá, {user.name}</p>
        <p className="module">{user.course_module}</p>
      </div>
      <div>
        <p>Tecnologias</p>
        <button className="addTech" onClick={() => setModal(true)}>
          +
        </button>
      </div>
      {modal && <AddModal setModal={setModal} />}
      <Lista>
        {techs.length > 0 ? (
          techs.map((elem, id) => (
            <li key={id}>
              <p>{elem.title}</p>
              <div>
                <p className="status">{elem.status}</p>
                <button onClick={() => deleteTech(elem.id)} disabled={loading}>
                  <img src="./iconeExcluir.png" alt="icone excluir" />
                </button>
              </div>
            </li>
          ))
        ) : (
          <p>Cadastre uma tecnologia</p>
        )}
      </Lista>
    </Box>
  ) : (
    navigate(`/`)
  );
};

export default Dasboard;
