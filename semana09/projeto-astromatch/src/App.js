import React, { useState } from "react";
import Header from "./Components/Header/Header"
import styled from "styled-components";
import MatchList from "./Components/MatchList/MatchList"
import MatchScreen from "./Components/MatchScreen/MatchScreen"
import ButtonMatches from "./img/matches.png"

const AppContainer = styled.div `
    width: 375px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    overflow: auto;
` 

const Button = styled.img `
  width: 40px;
  height: 40px;
  margin-top: 20px;
  margin-right: 20px;
  float: right;
    &:hover {
    opacity: 0.5;
        }
`

export default function App() {
  const [showScreen, setShowScreen] =  useState(false)

  const openMatchScreen = () =>{
    if (!showScreen){
      return(
        <MatchScreen />
      )
    }else {
      return(
        <MatchList />
      ) 

    }

  }

  const newScreen = () => {
    setShowScreen(!showScreen)
  }


  return (
        <AppContainer>
          <Header />
          <Button img src ={ButtonMatches} onClick={newScreen} />
          {openMatchScreen()}
        </AppContainer>
  );
}
