import React from "react";
import "./App.css";
import Blocks from "./components/Blocks";
import ContentArea from "./containers/ContentArea";
import Transactions from "./containers/Transactions"
import styled from 'styled-components'

const App = () => {
  return (
    <AppDiv className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to Blockchain Visualiser</h1>
      </header>
      <ContentDiv>
        <Blocks/>
        <ContentArea />
        <Transactions />
      </ContentDiv>
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
    background: rgb(211,211,211);

    & .wrapperDiv {
      width: 20vw;
      margin-top: 20px;
    }

    & .contentArea {
      width: 40vw;
      margin-top: 20px;
    }
`