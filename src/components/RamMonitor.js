// src/components/RamMonitor.js
import React, { useState, useEffect } from "react";
import styled from "styled-components"; // Correction ici

function RamMonitor() {
  const [ramData, setRamData] = useState({ total: 0, utilized: 0 });

  const RamMonitorContainer = styled.div`
    width: max-widght;
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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/ram`);
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
    const intervalId = setInterval(
      fetchRamData,
      parseInt(process.env.REACT_APP_COOLDOWN)
    );

    return () => clearInterval(intervalId);
  }, []);

  const percentage = (ramData.utilized / ramData.total) * 100;

  return (
    <RamMonitorContainer>
      <h2>RAM Usage</h2>
      <ProgressBarContainer>
        <ProgressBar percentage={percentage} />
      </ProgressBarContainer>
      <p>
        {Math.round(ramData.utilized / 1024 / 1024)} Go /{" "}
        {Math.round(ramData.total / 1024 / 1024)} Go
      </p>
    </RamMonitorContainer>
  );
}

export default RamMonitor;
