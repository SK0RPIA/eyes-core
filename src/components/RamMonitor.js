// src/components/RamMonitor.js
import React, { useState, useEffect } from "react";
import { styled } from "styled-components";

function RamMonitor() {
  const [ramData, setRamData] = useState({ total: 0, utilized: 0 });
  const RamMonitorContainer = styled.div`
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(18, 18, 18, 0.75);
    box-shadow: 0 0 5px #0bf, 0 0 10px #0bf;
  `;

  const ProgressBarContainer = styled.div`
    height: 30px;
    border: 2px solid #0bf;
    border-radius: 15px;
    overflow: hidden;
    position: relative;
  `;

  const ProgressBar = styled.div`
    height: 100%;
    width: ${(props) => props.percentage}%;
    background-color: #0bf;
    position: absolute;
    top: 0;
    left: 0;
  `;
  useEffect(() => {
    const fetchRamData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/ram"); // Ajustez l'URL selon votre configuration API
        const data = await response.json();
        setRamData(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données de la RAM:",
          error
        );
      }
    };

    fetchRamData();
    const intervalId = setInterval(fetchRamData, 5000); // Mise à jour toutes les 5 secondes

    return () => clearInterval(intervalId); // Nettoyage à la désinscription
  }, []);

  const percentage = (ramData.utilized / 1024 / (ramData.total / 1024)) * 100;

  return (
    <RamMonitorContainer>
      <h2>RAM Usage</h2>
      <ProgressBarContainer>
        <ProgressBar percentage={percentage} />
      </ProgressBarContainer>
      <p>
        {Math.round(ramData.utilized / 1024)} MB / {Math.round(ramData.total / 1024)} MB
      </p>
    </RamMonitorContainer>
  );
}

export default RamMonitor;
