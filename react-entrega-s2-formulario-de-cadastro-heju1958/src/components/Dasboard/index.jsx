import { useNavigate } from "react-router-dom";
import { Box, Header } from "../Styles";

const Dasboard = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
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
        <div>
          <p className="nameUser">Olá, {user.name}</p>
          <p>{user.course_module}</p>
        </div>
        <p>"Que pena! Estamos em desenvolvimento!"</p>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </Box>
    </>
  );
};

export default Dasboard;
