// src/components/Monitor.js
import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

const MonitorContainer = styled.div`
  width: 200px;
  margin: 20px;
  text-align: center;
  padding: 10px;
  background-color: rgba(18, 18, 18, 0.75);
  box-shadow: 0 0 5px #0bf, 0 0 10px #0bf;
`;

function Monitor() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const fetchCpuPercentage = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/cpu/percentage`); 
        const data = await response.json();
        setPercentage(data.total_usage);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération du pourcentage d'utilisation du CPU:",
          error
        );
      }
    };

    fetchCpuPercentage();
    const intervalId = setInterval(fetchCpuPercentage, parseInt(process.env.REACT_APP_COOLDOWN));

    return () => clearInterval(intervalId);
  }, []);

  let color = "#0BF"; 
  if (percentage > 80) {
    color = "red";
  } else if (percentage > 50) {
    color = "orange";
  }

  return (
    <MonitorContainer>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: color,
          pathColor: color,
          trailColor: "#121212",
        })}
      />
      <p>CPU Usage</p>
    </MonitorContainer>
  );
}

export default Monitor;
