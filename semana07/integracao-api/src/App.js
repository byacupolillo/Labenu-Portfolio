import React from "react";
import axios from "axios";
import Register from "./Components/Register";
import UserList from "./Components/UserList";

class App extends React.Component {
  state = {
    userRegister: true,
    buttonUser: "Lista de Usuários Cadastrados",
  };

  goToUserList = () => {
    if (this.state.userRegister) {
      this.setState({ userRegister: false });
      this.setState({ botao: "Cadastro de Novos Usuários" });
    } else {
      this.setState({ userRegister: true });
      this.setState({ botao: "Mostrar Usuários" });
    }
  };
  render() {
    const renderUser = () => {
      if (this.state.userRegister) {
        return <Register />;
      } else {
        return <UserList />;
      }
    };
    return (
      <div>
        <button onClick={this.goToUserList}>{this.state.buttonUser} </button>
        <div>{renderUser()}</div>
      </div>
    );
  }
}

export default App;
