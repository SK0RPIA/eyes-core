// src/components/DiskList.js
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Disk from "./Disk";

const DiskListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function DiskList() {
  const [disks, setDisks] = useState([]);

  useEffect(() => {
    const fetchDiskData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/disk"); // Ajustez l'URL selon votre configuration API
        const data = await response.json();
        setDisks(data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données des disques:",
          error
        );
      }
    };

    fetchDiskData();
    const intervalId = setInterval(fetchDiskData, 1000); // Mise à jour toutes les 1 seconde

    return () => clearInterval(intervalId); // Nettoyage à la désinscription
  }, []);

  return (
    <DiskListContainer>
      {disks.map((disk) => (
        <Disk key={disk.name} disk={disk} />
      ))}
    </DiskListContainer>
  );
}

export default DiskList;
