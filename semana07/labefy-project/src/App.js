import { render } from "@testing-library/react";
import React from "react";
import CreatePlaylists from "./Components/CreatePlaylist";
import AllPlaylists from "./Components/AllPlaylists";
import { AppContainer } from "./Components/Style";
import LogoLabefy from "./img/logolabefy.png";
import { HeaderContainer } from "./Components/Style"


class App extends React.Component {
  state = {
    createPlaylist: true,
    AllPlaylists: true
  };

  render() {
    const createdPlaylists = <AllPlaylists/>
    const newPlaylists = <CreatePlaylists/>
      return (
        <AppContainer>
          <HeaderContainer>
              <img src={ LogoLabefy } alt="Logo Labefy" width="100px" height="100px"/>
              <h1>Labefy</h1>
          </HeaderContainer>
            {newPlaylists}
            {createdPlaylists}
          </AppContainer>
    )
  }
}

export default App;