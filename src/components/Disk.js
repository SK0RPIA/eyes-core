// src/components/Disk.js
import React from "react";
import styled from "styled-components";

function Disk({ disk }) {
  const DiskSection = styled.section`
    width: 250px;
    margin: 20px;
    text-align: center;
  `;

  const DiskIcon = styled.svg`
    width: 100px;
    height: 100px;
    fill: #0bf;
  `;

  const DiskLabel = styled.p`
    margin-top: 10px;
    color: #0bf;
    font-weight: bold;
  `;

  const DiskUsageBar = styled.div`
    height: 20px;
    background-color: rgba(18, 18, 18, 0.75);
    border: 2px solid #0bf;
    border-radius: 10px;
    margin-top: 10px;
    position: relative;
  `;

  const DiskUsageFill = styled.div`
    height: 100%;
    background-color: #0bf;
    width: ${(props) => props.percentage || 0}%;
  `;
  const PartitionLabel = styled.p`
    margin-top: 5px;
    color: #aaa; // Couleur plus claire pour les partitions
    font-weight: bold;
  `;

  const displayDiskOrPartition = (data) => {
    const utilizedGB = (data.storage_used / 1024 ** 3).toFixed(2);
    const totalGB = (data.storage_total / 1024 ** 3).toFixed(2);

    return (
      <>
        <DiskIcon viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="15" />
          <circle cx="16" cy="16" r="10" />
        </DiskIcon>
        <DiskLabel>{data.name}</DiskLabel>
        <DiskUsageBar>
          <DiskUsageFill
            percentage={parseFloat(data.storage_usage_percentage)}
          />
        </DiskUsageBar>
        <p>
          {utilizedGB} GB / {totalGB} GB
        </p>
      </>
    );
  };

  return (
    <DiskSection>
      {displayDiskOrPartition(disk)}
      {disk.partitions &&
        disk.partitions.map((partition) => (
          <PartitionLabel key={partition.name}>
            {displayDiskOrPartition(partition)}
          </PartitionLabel>
        ))}
    </DiskSection>
  );
}

export default Disk;
