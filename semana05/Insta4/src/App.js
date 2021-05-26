import React from "react";
import "./App.css";
import Post from "./components/Post/Post";
import styled from "styled-components";

const DivAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 250px;
  padding: 5px;
  margin: 10px;
  border-radius: 5px;
`;

const BotaoAdd = styled.button`
  margin-bottom: 40px;
  padding: 4px;
  border-radius: 5px;
`;

const LogoTopo = styled.img`
  margin-top: 10px;
  margin-bottom: 20px;
`;

const DivPost = styled.div``;

class App extends React.Component {
  state = {
    arrayPosts: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50/?a=1",
        fotoPost: "https://picsum.photos/200/150/?a=1",
      },
      {
        nomeUsuario: "bya",
        fotoUsuario: "https://picsum.photos/50/50/?a=2",
        fotoPost: "https://picsum.photos/200/150/?a=4",
      },
      {
        nomeUsuario: "nana",
        fotoUsuario: "https://picsum.photos/50/50/?a=3",
        fotoPost: "https://picsum.photos/200/150/?a=5",
      },
    ],
  };

  adicionaPost = () => {
    const postNovo = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novosPosts = [...this.state.arrayPosts, postNovo];
    this.setState({ arrayDePosts: novosPosts });

  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.arrayPosts.map((post, index, posts) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
          key={index}
        />
      );
    });

    return (
      <DivAppContainer>
        <LogoTopo src="https://fontmeme.com/permalink/201017/08e5965c69408e8a7950d5d2ffcb6f9e.png" />
        <div>
          <Input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Usuário"}
          />
          <Input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto pessoal"}
          />
          <Input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Faça seu post"}
          />
          <BotaoAdd onClick={this.adicionaPost}>Adicionar</BotaoAdd>
        </div>
        <DivPost>{listaDePosts}</DivPost>
      </DivAppContainer>
    );
  }
}

export default App;
