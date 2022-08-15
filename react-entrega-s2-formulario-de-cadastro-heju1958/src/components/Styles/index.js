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
  .dadosUser {
    display: flex;
    flex-direction: column;
    text-align: start;
  }
  @media (min-width: 900px) {
    .dadosUser {
      display: flex;
      flex-direction: row;
    }
  }
  div {
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
    justify-content: space-between;
    .nameUser {
      font-weight: 800;
    }
    .module {
      color: #868e96;
    }
    .addTech {
      margin-top: 1rem;
      width: 2rem;
      height: 2rem;
      font-weight: bold;
      background: #212529;
      border: none;
      color: white;
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

export const Modal = styled(motion.div)`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  background: #212529;
  border-radius: 5px;
  text-align: left;
  position: absolute;

  @media (min-width: 900px) {
    left: 40%;
  }

  div {
    margin: 0;
    display: flex;
    justify-content: space-between;
    background: #343b41;
    .x {
      width: 0;
      height: 0;
      margin: 0.3rem;
      padding: 1rem;
      background: none;
      color: lightgrey;
    }
  }
  p {
    margin-left: 1rem;
    color: white;
  }
  label {
    text-align: start;
    margin-left: 0.8rem;
    font-style: normal;
    font-size: 0.8rem;
  }
  input {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  select {
    margin-top: 1rem;
    width: 91%;
  }
  button {
    background: #ff577f;
    color: white;
    height: 2.5rem;
    border: none;
    border-radius: 4px;
    width: 92%;
    margin-left: 0.6rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }
`;

export const Lista = styled.ul`
  background: #212529;
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-left: 1rem;
  margin-right: 1rem;
  li {
    display: flex;
    justify-content: space-around;
    padding: 0;
    background: #121214;
    width: 90%;
    margin-left: 5%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 0.6rem;
  }
  li:hover {
    background: #343b41;
  }
  .status {
    color: #868e96;
  }
  button {
    background: none;
    border: none;
    img {
      margin: 0;
    }
  }
  @media (min-width: 900px) {
    li {
      justify-content: space-between;
      p {
        margin: 1rem;
      }
      button {
        margin: 1rem;
      }
    }
  }
`;
