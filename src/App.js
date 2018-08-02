import React from "react";
import "./App.css";
import styled from 'styled-components'

import Header from "./containers/Header"
import Main from "./containers/Main"

const App = () => {
  return (
    <AppDiv className="App">
      <Header />
      <Main />
    </AppDiv>
  );
};

export default App;
const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`
const ContentDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    background: black;

    & .wrapperDiv {
      width: 20vw;
      margin-top: 20px;
    }

    & .contentArea {
      width: 40vw;
      margin-top: 20px;
    }
`