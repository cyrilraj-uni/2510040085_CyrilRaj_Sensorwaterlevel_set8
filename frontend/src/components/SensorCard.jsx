import React from 'react';

function SensorCard({ sensor }) {
  const isLow = sensor.waterLevel < 25;
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      backgroundColor: isLow ? '#ffe5e5' : '#e5ffe5',
      width: '200px'
    }}>
      <h3>{sensor.name}</h3>
      <p>Water Level: {sensor.waterLevel}%</p>
      <p>Status: {sensor.status}</p>
      {isLow && <p style={{ color: 'red', fontWeight: 'bold' }}>ALERT: Water level below 25%</p>}
    </div>
  );
}

export default SensorCard;