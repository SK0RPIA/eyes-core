// src/App.js
import React from 'react';
import GlobalStyle from './GeneralStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header>
        <h1>Server Monitoring Panel</h1>
      </header>
      <main>
        <section>
          <h2>CPU</h2>
          {/* Ici, ajoutez le composant ou les informations relatives au CPU */}
        </section>
        <section>
          <h2>RAM</h2>
          {/* Ici, ajoutez le composant ou les informations relatives à la RAM */}
        </section>
        {/* Ajoutez d'autres sections pour les disques, le RAID, etc. */}
      </main>
    </div>
  );
}

export default App;
