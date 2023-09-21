import React from "react";
import GlobalStyle from "./GeneralStyle";
import styled from "styled-components";
import Monitor from "./components/Monitor";
import RamMonitor from "./components/RamMonitor";
import DiskList from "./components/DiskList";

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
          <RamMonitor />
        </section>
        <section>
          <h2>Disks</h2>
          <DiskList />
        </section>
      </Dashboard>
    </div>
  );
}

export default App;
