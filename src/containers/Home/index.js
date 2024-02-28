import React, { useState, useRef, } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'

import people from '../../assets/people.png'
import Arrow from '../../assets/arrow.png'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from './styles';

function App() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {

    const { data: newUsers } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([
      ...users, newUsers,]);

      navigate("/usuarios");

  }

  return (
    <Container>
      <Image alt="logo-imagem" src={people} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button to="./usuarios" onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );

}

export default App;