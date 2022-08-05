import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  max-width: 300px;
  margin: 1rem auto;

  img {
    margin-bottom: 1rem;
  }
`;
export const Box = styled(motion.div)`
  max-width: 900px;
  margin: 2rem auto;

  img {
    margin-bottom: 1rem;
  }
  div {
    display: flex;
    margin-left: 1.4rem;
    justify-content: space-between;

    .nameUser {
      font-weight: 800;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin: 1rem;
  img {
    width: 7rem;
    height: 1.4rem;
  }
  button {
    width: 4rem;
    height: 2rem;
    background: #212529;
    border-radius: 4px;
    border: none;
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #212529;
  border-radius: 5px;
  p {
    color: #868e96;
  }
  span {
    color: gray;
  }
  .conta {
    font-weight: 600;
    font-size: 1.2rem;
    color: white;
  }
  label {
    text-align: start;
    margin-left: 1rem;
    font-style: normal;
    font-size: 0.8rem;
  }
  button {
    background: #59323f;
    color: white;
    height: 2.5rem;
    border: none;
    border-radius: 4px;
    width: 92%;
    margin-left: 0.6rem;
    margin-bottom: 3rem;
  }
  .botao_cadastro {
    background: #868e96;
    margin-bottom: 3rem;
  }
  .botao_entrar {
    background: #ff577f;
    margin-bottom: 0;
  }
`;
