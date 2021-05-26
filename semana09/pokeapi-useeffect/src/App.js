import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import PokeCard from "./components/PokeCard";
import styled from "styled-components";

const AppContainer = styled.div `
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #e0e0e0;
  margin: auto;
  max-width:50vw;
`
const SelectContainer = styled.select `
  border: 3px solid blue;
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
`

const App = (props) => {
  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  // método que roda após a montagem do componente
  useEffect(() => {
    getPokeList();
  },[])


  const getPokeList = () => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        // função que está setando no estado os 151 pokemons
        setPokeList(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  };
  
  return (
    <AppContainer>
      {/* evento onChange chama função toda vez que o usuário 
      escolhe um novo pokemon no dropdown */}
      <SelectContainer onChange={changePokeName}>
        <option value={pokeName}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map((pokemon) => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </SelectContainer>
      {/* expressão booleana que renderiza o componente PokeCard,
      caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </AppContainer>
  );
}

export default App;

