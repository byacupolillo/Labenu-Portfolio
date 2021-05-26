import React from "react";
import axios from "axios";
import styled from "styled-components";

const PokemonSelect = styled.select`
  max-width: 100%;
`;

const AppContainer = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid blue;
margin: 50px 200px 200px;
`

class App extends React.Component {
  state = {
    pokemonList: [],
    selectedPokemonUrl: ""
  };

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    axios.get(apiUrl).then((response) => {
      this.setState({ pokemonList: response.data.results });
    });
  };

  onChangeSelect = (event) => {
    console.log("SELECIONOU ALGO", event.target.value);
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${event.target.value}`;
    axios.get(apiUrl).then((response) => {
      console.log("RESPOSTA POKEMON", response.data.sprites.front_default);
      this.setState({
        selectedPokemonUrl: response.data.sprites.front_default
      });
    });
  };

  render() {
    console.log(this.state.pokemonList);
    const optionList = this.state.pokemonList.map((pokemon) => {
      return <option key={pokemon.name}>{pokemon.name}</option>;
    });

    return (
      <AppContainer>
        <h3>Selecione seu Pokémon abaixo:</h3>
        <PokemonSelect onChange={this.onChangeSelect}>
          {optionList}
        </PokemonSelect>
        <img src={this.state.selectedPokemonUrl} />
      </AppContainer>
    );
  }
}

export default App;
