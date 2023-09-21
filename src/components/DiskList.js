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
        const response = await fetch(`${process.env.REACT_APP_API_URL}/disk`); 
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
    const intervalId = setInterval(fetchDiskData, parseInt(process.env.REACT_APP_COOLDOWN)); 

    return () => clearInterval(intervalId); 
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
