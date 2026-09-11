import React, { useEffect, useState } from 'react';
import SensorCard from './SensorCard';

function SensorGrid() {
  const [sensors, setSensors] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/sensors')
      .then(res => res.json())
      .then(data => setSensors(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error loading sensors: {error}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {sensors.map(sensor => (
        <SensorCard key={sensor.id} sensor={sensor} />
      ))}
    </div>
  );
}

export default SensorGrid;