// src/App.js
import React from 'react';
import GlobalStyle from './GeneralStyle';
import styled from 'styled-components';
import Monitor from './components/Monitor';

const Dashboard = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <h1>Server Monitoring Panel</h1>
      </header>
      <Dashboard>
        <section>
          <h2>CPU</h2>
          <Monitor />
        </section>
        <section>
          <h2>RAM</h2>
          {/* Ici, ajoutez le composant ou les informations relatives à la RAM */}
        </section>
        {/* Ajoutez d'autres sections pour les disques, le RAID, etc. */}
      </Dashboard>
    </div>
  );
}

export default App;
